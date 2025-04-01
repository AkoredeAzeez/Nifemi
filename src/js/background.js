document.addEventListener('DOMContentLoaded', () => {
    // Create a single Audio instance
    const bgMusic = new Audio('../assets/audio/theme-song.mp3');
    bgMusic.loop = true;
    let musicInitialized = false;

    // Restore audio state from localStorage
    const wasMusicPlaying = localStorage.getItem('bgMusicPlaying') === 'true';
    const currentTime = localStorage.getItem('bgMusicTime');
    
    if (wasMusicPlaying) {
        bgMusic.currentTime = parseFloat(currentTime || 0);
        bgMusic.play().then(() => {
            musicControl.innerHTML = '🔊';
        }).catch(err => console.log('Audio playback prevented'));
    }

    // Save audio state before page unload
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('bgMusicPlaying', !bgMusic.paused);
        localStorage.setItem('bgMusicTime', bgMusic.currentTime);
    });

    // Add music control button
    const musicControl = document.createElement('button');
    musicControl.className = 'music-control';
    musicControl.innerHTML = window.audioManager.isPlaying ? '🔊' : '🔈';
    musicControl.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        background: rgba(255, 255, 255, 0.7);
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        cursor: pointer;
        font-size: 20px;
    `;

    // Handle first interaction
    document.body.addEventListener('click', () => {
        if (!musicInitialized) {
            bgMusic.play()
                .then(() => {
                    musicInitialized = true;
                    musicControl.innerHTML = '🔊';
                })
                .catch(err => console.log('Audio autoplay prevented'));
        }
    }, { once: true }); // Remove listener after first click

    // Handle music control button
    musicControl.addEventListener('click', (e) => {
        e.stopPropagation();
        if (window.audioManager.isPlaying) {
            window.audioManager.pauseAudio();
            musicControl.innerHTML = '🔈';
        } else {
            window.audioManager.playAudio();
            musicControl.innerHTML = '🔊';
        }
    });

    document.body.appendChild(musicControl);

    const slideshowContainer = document.createElement('div');
    slideshowContainer.className = 'background-slideshow';
    document.body.prepend(slideshowContainer);

    const colorThief = new ColorThief();
    const backgroundImages = [
        '../assets/images/ni1.jpg',
        '../assets/images/ni2.jpg',
        '../assets/images/ni3.jpg',
        '../assets/images/ni4.jpg',
        '../assets/images/ni5.jpg',
        '../assets/images/ni6.jpg',
        '../assets/images/ni7.jpg',
        '../assets/images/ni8.jpg',
        '../assets/images/ni9.jpg',
        '../assets/images/ni10.jpg',
        '../assets/images/ni11.jpg',
        '../assets/images/ni12.jpg',
        '../assets/images/ni13.jpg',
        '../assets/images/ni14.jpg',
        '../assets/images/ni15.jpg'
    ];

    let loadedImages = 0;
    const totalImages = backgroundImages.length;
    const imageElements = [];

    backgroundImages.forEach(imgSrc => {
        const img = new Image();
        img.crossOrigin = "Anonymous";  // Required for Color Thief to work
        img.src = imgSrc;
        
        img.onload = () => {
            loadedImages++;
            imageElements.push(img);
            
            if (loadedImages === totalImages) {
                startSlideshow();
            }
        };
        
        slideshowContainer.appendChild(img);
    });

    function updateBackgroundColor(img) {
        try {
            const dominantColor = colorThief.getColor(img);
            const [r, g, b] = dominantColor;
            // Create a more transparent gradient that won't block the image
            document.body.style.background = `
                linear-gradient(
                    135deg, 
                    rgba(${r}, ${g}, ${b}, 0.3) 0%,
                    rgba(${r}, ${g}, ${b}, 0.2) 100%
                )
            `;
        } catch (e) {
            console.log('Could not extract color from image');
        }
    }

    function startSlideshow() {
        const images = slideshowContainer.querySelectorAll('img');
        let currentIndex = 0;
        let nextIndex = 1;

        // Show first image and set initial background
        images[currentIndex].classList.add('active');
        updateBackgroundColor(images[currentIndex]);

        // Change background every 7 seconds
        setInterval(() => {
            images[currentIndex].classList.remove('active');
            images[nextIndex].classList.add('active');
            updateBackgroundColor(images[nextIndex]);

            currentIndex = nextIndex;
            nextIndex = (nextIndex + 1) % images.length;
        }, 7000);
    }

    // Check if we're on the song page
    const isSongPage = window.location.pathname.includes('song.html');
    if (isSongPage) {
        bgMusic.volume = 0.2; // Lower volume to 20%
    } else {
        bgMusic.volume = 1.0; // Full volume on other pages
    }

    // Update volume when navigating
    window.addEventListener('beforeunload', () => {
        const nextPageIsSong = document.activeElement?.href?.includes('song.html');
        if (nextPageIsSong) {
            bgMusic.volume = 0.2;
        }
    });

    // Add fade effect when changing volume
    function fadeVolume(from, to, duration = 1000) {
        const steps = 20;
        const stepTime = duration / steps;
        const volumeStep = (to - from) / steps;
        let currentStep = 0;

        const fadeInterval = setInterval(() => {
            bgMusic.volume = from + (volumeStep * currentStep);
            currentStep++;

            if (currentStep >= steps) {
                bgMusic.volume = to;
                clearInterval(fadeInterval);
            }
        }, stepTime);
    }
});