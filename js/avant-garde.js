/* js/avant-garde.js */
document.addEventListener('DOMContentLoaded', () => {
    initNeuralCore();
    initDynamicIsland();
    initKineticTypography();
});

// ==========================================
// 1. DYNAMIC ISLAND (NAV)
// ==========================================
function initDynamicIsland() {
    const orb = document.getElementById('nav-orb');
    const menu = document.getElementById('spatial-menu');
    const closeBtn = document.getElementById('menu-close');
    const links = document.querySelectorAll('.kinetic-link');

    if(!orb || !menu) return;

    orb.addEventListener('click', () => {
        menu.classList.add('active');
        
        // Stagger animate links in
        if(typeof gsap !== 'undefined') {
            gsap.fromTo(links, 
                { y: 50, opacity: 0, rotateX: -20 },
                { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.2 }
            );
        }
    });

    closeBtn.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    // Close on link click
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
        
        // Add content attribute for the hover fill effect
        const text = link.innerText;
        link.setAttribute('data-text', text);
    });
    
    // Fallback interval to set text if translation happens
    setInterval(() => {
        links.forEach(link => {
            if(link.innerText !== link.getAttribute('data-text')) {
                link.setAttribute('data-text', link.innerText);
            }
        });
    }, 1000);
}

// ==========================================
// 2. NEURAL CORE (THREE.JS)
// ==========================================
function initNeuralCore() {
    const canvas = document.getElementById('neural-core-canvas');
    if(!canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        // Spherical distribution
        const radius = 8 + Math.random() * 4;
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        
        posArray[i * 3] = x;
        posArray[i * 3 + 1] = y;
        posArray[i * 3 + 2] = z;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Custom shader material for glowing cyan/orange particles
    const material = new THREE.PointsMaterial({
        size: 0.05,
        color: 0x00d4ff,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    camera.position.z = 15;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;

        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.0005;

        // Easing for mouse
        particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
        particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);
        
        // Gentle breathing scale
        const scale = 1 + Math.sin(elapsedTime * 0.5) * 0.05;
        particlesMesh.scale.set(scale, scale, scale);

        renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// ==========================================
// 3. KINETIC TYPOGRAPHY (GSAP)
// ==========================================
function initKineticTypography() {
    if(typeof gsap === 'undefined') return;
    
    // Simple text effect for hero title
    const lines = document.querySelectorAll('.hero-kinetic-title span');
    
    gsap.from(lines, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5
    });
}
