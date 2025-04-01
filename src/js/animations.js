document.addEventListener('DOMContentLoaded', () => {
    // Random movement for floating elements
    const floatingElements = document.querySelectorAll('.floating-elements > div');
    
    floatingElements.forEach(element => {
        // Random starting position
        element.style.top = Math.random() * 100 + 'vh';
        element.style.left = Math.random() * 100 + 'vw';
        
        // Add random rotation
        element.style.transform = `rotate(${Math.random() * 360}deg)`;
    });

    // Optional: Play background music on first user interaction
    document.body.addEventListener('click', () => {
        const bgMusic = document.getElementById('bgMusic');
        if (bgMusic && bgMusic.paused) {
            bgMusic.play().catch(err => console.log('Audio autoplay prevented'));
        }
    }, { once: true });
});