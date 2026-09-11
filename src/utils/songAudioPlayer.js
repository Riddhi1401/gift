// Web Audio Melodic Synthesizer Engine
// Generates audible musical melodies tailored for each photo's theme
class SongAudioPlayer {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.timer = null;
    this.currentSongKey = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Melodic themes composed for each song
  getSongMelody(songName) {
    const s = (songName || '').toLowerCase();

    // 1. Tera Yaar Hoon Main (Warm, emotional, acoustic guitar/piano feel)
    if (s.includes('tera yaar') || s.includes('canopy')) {
      return {
        tempo: 320,
        notes: [
          { f: 392.00, d: 0.6, type: 'sine' },  // G4
          { f: 440.00, d: 0.4, type: 'sine' },  // A4
          { f: 493.88, d: 0.8, type: 'triangle' },// B4
          { f: 440.00, d: 0.4, type: 'sine' },  // A4
          { f: 392.00, d: 0.8, type: 'sine' },  // G4
          { f: 329.63, d: 1.0, type: 'triangle' },// E4
          { f: 392.00, d: 1.2, type: 'sine' },  // G4
        ]
      };
    }

    // 2. Dil Chahta Hai (Uplifting, breezy college pop beat)
    if (s.includes('dil chahta') || s.includes('courtyard')) {
      return {
        tempo: 260,
        notes: [
          { f: 523.25, d: 0.4, type: 'triangle' }, // C5
          { f: 587.33, d: 0.4, type: 'sine' },     // D5
          { f: 659.25, d: 0.6, type: 'triangle' }, // E5
          { f: 587.33, d: 0.3, type: 'sine' },     // D5
          { f: 523.25, d: 0.5, type: 'triangle' }, // C5
          { f: 440.00, d: 0.6, type: 'sine' },     // A4
          { f: 523.25, d: 0.9, type: 'triangle' }, // C5
        ]
      };
    }

    // 3. Matargashti (Lively, playful, bouncy tune)
    if (s.includes('matargashti') || s.includes('unapologetically')) {
      return {
        tempo: 220,
        notes: [
          { f: 587.33, d: 0.3, type: 'triangle' }, // D5
          { f: 659.25, d: 0.3, type: 'triangle' }, // E5
          { f: 783.99, d: 0.4, type: 'sine' },     // G5
          { f: 659.25, d: 0.25, type: 'triangle' },// E5
          { f: 587.33, d: 0.3, type: 'triangle' }, // D5
          { f: 493.88, d: 0.3, type: 'sine' },     // B4
          { f: 587.33, d: 0.7, type: 'triangle' }, // D5
        ]
      };
    }

    // 4. Kho Gaye Hum Kahan (Dreamy, floating indie melody)
    if (s.includes('kho gaye') || s.includes('blue skies')) {
      return {
        tempo: 380,
        notes: [
          { f: 440.00, d: 0.7, type: 'sine' },     // A4
          { f: 523.25, d: 0.7, type: 'sine' },     // C5
          { f: 659.25, d: 0.9, type: 'triangle' }, // E5
          { f: 587.33, d: 0.8, type: 'sine' },     // D5
          { f: 523.25, d: 1.1, type: 'sine' },     // C5
        ]
      };
    }

    // 5. Kar Har Maidaan Fateh (Triumphant, powerful fanfare)
    if (s.includes('kar har') || s.includes('pride')) {
      return {
        tempo: 300,
        notes: [
          { f: 261.63, d: 0.4, type: 'sawtooth' }, // C4
          { f: 329.63, d: 0.4, type: 'triangle' }, // E4
          { f: 392.00, d: 0.5, type: 'sine' },     // G4
          { f: 523.25, d: 0.9, type: 'triangle' }, // C5
          { f: 493.88, d: 0.4, type: 'sine' },     // B4
          { f: 523.25, d: 1.2, type: 'triangle' }, // C5
        ]
      };
    }

    // 6. Ilahi (Adventurous, upbeat wanderlust melody)
    if (s.includes('ilahi') || s.includes('views')) {
      return {
        tempo: 240,
        notes: [
          { f: 440.00, d: 0.3, type: 'triangle' }, // A4
          { f: 493.88, d: 0.3, type: 'triangle' }, // B4
          { f: 554.37, d: 0.4, type: 'sine' },     // C#5
          { f: 659.25, d: 0.6, type: 'triangle' }, // E5
          { f: 554.37, d: 0.4, type: 'sine' },     // C#5
          { f: 739.99, d: 0.9, type: 'triangle' }, // F#5
        ]
      };
    }

    // 7. Barso Re (Lush monsoon rain rhythm)
    if (s.includes('barso') || s.includes('riverside')) {
      return {
        tempo: 250,
        notes: [
          { f: 523.25, d: 0.3, type: 'sine' },     // C5
          { f: 466.16, d: 0.3, type: 'triangle' }, // Bb4
          { f: 523.25, d: 0.4, type: 'sine' },     // C5
          { f: 622.25, d: 0.5, type: 'triangle' }, // Eb5
          { f: 523.25, d: 0.4, type: 'sine' },     // C5
          { f: 392.00, d: 0.7, type: 'triangle' }, // G4
        ]
      };
    }

    // 8. Cafe Diaries / Iktara (Sweet, nostalgic, intimate)
    if (s.includes('iktara') || s.includes('cafe')) {
      return {
        tempo: 340,
        notes: [
          { f: 349.23, d: 0.6, type: 'sine' },     // F4
          { f: 392.00, d: 0.5, type: 'sine' },     // G4
          { f: 440.00, d: 0.8, type: 'triangle' }, // A4
          { f: 523.25, d: 0.7, type: 'sine' },     // C5
          { f: 440.00, d: 1.0, type: 'triangle' }, // A4
        ]
      };
    }

    // 9. Love You Zindagi (Breezy, cheerful acoustic chime)
    if (s.includes('love you') || s.includes('pause')) {
      return {
        tempo: 280,
        notes: [
          { f: 523.25, d: 0.4, type: 'sine' },     // C5
          { f: 659.25, d: 0.4, type: 'triangle' }, // E5
          { f: 587.33, d: 0.4, type: 'sine' },     // D5
          { f: 523.25, d: 0.6, type: 'triangle' }, // C5
          { f: 440.00, d: 0.5, type: 'sine' },     // A4
          { f: 523.25, d: 0.8, type: 'triangle' }, // C5
        ]
      };
    }

    // 10. Sooraj Dooba Hain (Dance club pulse)
    return {
      tempo: 210,
      notes: [
        { f: 440.00, d: 0.3, type: 'sawtooth' }, // A4
        { f: 523.25, d: 0.3, type: 'triangle' }, // C5
        { f: 659.25, d: 0.4, type: 'sine' },     // E5
        { f: 587.33, d: 0.3, type: 'sawtooth' }, // D5
        { f: 659.25, d: 0.8, type: 'triangle' }, // E5
      ]
    };
  }

  playSong(songName) {
    this.init();
    this.stop();
    this.isPlaying = true;
    this.currentSongKey = songName;

    const melody = this.getSongMelody(songName);
    let noteIdx = 0;

    const playNext = () => {
      if (!this.isPlaying) return;

      const note = melody.notes[noteIdx % melody.notes.length];
      noteIdx++;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      osc.type = note.type || 'sine';
      osc.frequency.setValueAtTime(note.f, now);

      // Volume envelope
      const targetVolume = this.isMuted ? 0 : 0.16;
      noteGain.gain.setValueAtTime(0, now);
      noteGain.gain.linearRampToValueAtTime(targetVolume, now + 0.05);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + note.d);

      osc.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + note.d + 0.1);

      this.timer = setTimeout(playNext, melody.tempo);
    };

    playNext();
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(muted ? 0 : 0.2, this.ctx.currentTime);
    }
  }
}

export const songAudioPlayer = new SongAudioPlayer();
