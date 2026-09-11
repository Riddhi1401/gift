import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const AudioContext = createContext(null);

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState('Our Memories 🎵');
  const [currentAudioUrl, setCurrentAudioUrl] = useState('/audio/song-1.mp3');
  const audioRef = useRef(null);

  useEffect(() => {
    // Single native HTML5 Audio instance for zero lag and clean playback
    const audio = new Audio();
    audio.src = currentAudioUrl;
    audio.volume = 0.85;
    audio.loop = true;

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Audio play request:', err);
      });
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    audio.muted = nextMuted;
  };

  const playTrack = (trackName, audioUrl) => {
    const audio = audioRef.current;
    if (!audio) return;

    const targetName = trackName || 'Our Memories 🎵';
    const targetUrl = audioUrl || '/audio/song-1.mp3';

    setCurrentTrack(targetName);
    setCurrentAudioUrl(targetUrl);

    // Switch and play immediately
    audio.pause();
    audio.src = targetUrl;
    audio.currentTime = 0;
    audio.muted = isMuted;

    audio.play().then(() => {
      setIsPlaying(true);
    }).catch((err) => {
      console.log('Audio autoplay policy note:', err);
    });
  };

  const changeTrack = (trackName) => {
    setCurrentTrack(trackName);
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        isMuted,
        currentTrack,
        currentAudioUrl,
        togglePlay,
        toggleMute,
        changeTrack,
        playTrack,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
