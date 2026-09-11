import React, { useEffect, useRef, useState } from 'react';
import { useAudio } from './AudioContext';

let ytApiPromise = null;
function loadYouTubeIframeApi() {
  if (ytApiPromise) return ytApiPromise;
  ytApiPromise = new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve(window.YT);
      return;
    }
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = () => {
      resolve(window.YT);
    };
  });
  return ytApiPromise;
}

export const YouTubeAudioPlayer = () => {
  const { currentVideoId, isPlaying, isMuted } = useAudio();
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    loadYouTubeIframeApi().then((YT) => {
      if (!isMounted || playerRef.current) return;

      playerRef.current = new YT.Player('youtube-hidden-player', {
        height: '200',
        width: '200',
        videoId: currentVideoId || 'EazPX7i8538',
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          fs: 0,
          origin: window.location.origin,
          playsinline: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            setIsReady(true);
            if (isMuted) {
              event.target.mute();
            } else {
              event.target.unMute();
            }
            if (isPlaying) {
              event.target.playVideo();
            }
          },
          onError: (err) => {
            console.warn('YouTube Player notice:', err);
          },
        },
      });
    });

    return () => {
      isMounted = false;
    };
  }, []);

  // When video ID changes
  useEffect(() => {
    if (isReady && playerRef.current && currentVideoId) {
      try {
        if (typeof playerRef.current.loadVideoById === 'function') {
          if (isPlaying) {
            playerRef.current.loadVideoById(currentVideoId);
          } else {
            playerRef.current.cueVideoById(currentVideoId);
          }
        }
      } catch (e) {
        console.error('Error switching video:', e);
      }
    }
  }, [currentVideoId, isReady]);

  // When isPlaying changes
  useEffect(() => {
    if (isReady && playerRef.current) {
      try {
        if (isPlaying && typeof playerRef.current.playVideo === 'function') {
          playerRef.current.playVideo();
        } else if (!isPlaying && typeof playerRef.current.pauseVideo === 'function') {
          playerRef.current.pauseVideo();
        }
      } catch (e) {
        console.error('Error playing/pausing video:', e);
      }
    }
  }, [isPlaying, isReady]);

  // When isMuted changes
  useEffect(() => {
    if (isReady && playerRef.current) {
      try {
        if (isMuted && typeof playerRef.current.mute === 'function') {
          playerRef.current.mute();
        } else if (!isMuted && typeof playerRef.current.unMute === 'function') {
          playerRef.current.unMute();
        }
      } catch (e) {
        console.error('Error muting/unmuting:', e);
      }
    }
  }, [isMuted, isReady]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: '1px',
        height: '1px',
        opacity: 0.01,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 9999,
      }}
    >
      <div id="youtube-hidden-player" />
    </div>
  );
};
