class AudioManager {
    static instance = null;
    static audio = null;

    constructor() {
        if (AudioManager.instance) {
            return AudioManager.instance;
        }

        AudioManager.audio = new Audio('../assets/audio/theme-song.mp3');
        AudioManager.audio.loop = true;
        this._initialize();
        AudioManager.instance = this;
    }

    _initialize() {
        // Use the static audio instance
        this.audio = AudioManager.audio;

        // Restore previous state
        const wasPlaying = localStorage.getItem('audioPlaying') === 'true';
        const savedTime = parseFloat(localStorage.getItem('audioTime') || '0');
        const savedVolume = parseFloat(localStorage.getItem('audioVolume') || '1');

        this.audio.currentTime = savedTime;
        this.audio.volume = savedVolume;

        // Only add event listeners if they haven't been added before
        if (!this._eventsInitialized) {
            this._initializeEvents();
            this._eventsInitialized = true;
        }

        // Handle song.html volume
        if (window.location.pathname.includes('song.html')) {
            this.setVolume(0.2);
        }
    }

    _initializeEvents() {
        // Auto-play if it was playing before
        const wasPlaying = localStorage.getItem('audioPlaying') === 'true';
        if (wasPlaying) {
            document.body.addEventListener('click', () => {
                if (!this.isPlaying) {
                    this.playAudio();
                }
            }, { once: true });
        }

        // Save state periodically
        setInterval(() => {
            if (this.isPlaying) {
                this._saveState();
            }
        }, 1000);

        // Save state before page unload
        window.addEventListener('beforeunload', () => {
            this._saveState();
        });
    }

    _saveState() {
        localStorage.setItem('audioPlaying', !this.audio.paused);
        localStorage.setItem('audioTime', this.audio.currentTime);
        localStorage.setItem('audioVolume', this.audio.volume);
    }

    playAudio() {
        this.audio.play()
            .then(() => {
                localStorage.setItem('audioPlaying', 'true');
            })
            .catch(console.error);
    }

    pauseAudio() {
        this.audio.pause();
        localStorage.setItem('audioPlaying', 'false');
    }

    setVolume(volume) {
        this.audio.volume = volume;
        localStorage.setItem('audioVolume', volume);
    }

    get isPlaying() {
        return !this.audio.paused;
    }
}

// Create global instance only if it doesn't exist
if (!window.audioManager) {
    window.audioManager = new AudioManager();
}