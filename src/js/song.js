document.addEventListener('DOMContentLoaded', () => {
    // Ensure background music is at lower volume
    if (window.audioManager) {
        window.audioManager.setVolume(0.2);
    }

    // Restore normal volume when leaving page
    window.addEventListener('beforeunload', () => {
        if (window.audioManager) {
            window.audioManager.setVolume(1.0);
        }
    });

    // Lower background music volume if it's playing
    const wasMusicPlaying = localStorage.getItem('bgMusicPlaying') === 'true';
    if (wasMusicPlaying) {
        const bgMusic = document.querySelector('audio') || new Audio('../assets/audio/theme-song.mp3');
        bgMusic.volume = 0.2;
    }

    const playButton = document.getElementById('playButton');
    const musicPlayer = document.querySelector('.music-player');
    const audio = new Audio('../assets/audio/birthday-song.mp3');
    let isPlaying = false;

    playButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playButton.innerHTML = '<span class="play-icon">▶️</span>';
            musicPlayer.classList.remove('playing');
        } else {
            audio.play();
            playButton.innerHTML = '<span class="play-icon">⏸️</span>';
            musicPlayer.classList.add('playing');
        }
        isPlaying = !isPlaying;
    });

    audio.addEventListener('ended', () => {
        isPlaying = false;
        playButton.innerHTML = '<span class="play-icon">▶️</span>';
        musicPlayer.classList.remove('playing');
    });
});