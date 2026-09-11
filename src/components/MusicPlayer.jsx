import React from 'react';
import { useAudio } from './AudioContext';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import { motion } from 'framer-motion';

export const MusicPlayer = () => {
  const { isPlaying, isMuted, currentTrack, togglePlay, toggleMute } = useAudio();

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-full px-4 py-2.5 shadow-2xl text-slate-200"
    >
      {/* Animated Equalizer Bars */}
      <div className="flex items-center gap-0.5 h-4 w-4 justify-center">
        {isPlaying && !isMuted ? (
          <>
            <span className="w-1 bg-amber-400 rounded-full animate-eq-1" />
            <span className="w-1 bg-amber-400 rounded-full animate-eq-2" />
            <span className="w-1 bg-amber-400 rounded-full animate-eq-3" />
            <span className="w-1 bg-amber-400 rounded-full animate-eq-4" />
          </>
        ) : (
          <Music className="w-4 h-4 text-slate-400" />
        )}
      </div>

      {/* Track Label */}
      <div className="hidden sm:flex flex-col text-xs pr-1">
        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Playing</span>
        <span className="font-semibold text-slate-200 truncate max-w-[140px]">{currentTrack}</span>
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105"
        title={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause className="w-4 h-4 fill-slate-950" /> : <Play className="w-4 h-4 fill-slate-950 ml-0.5" />}
      </button>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="w-7 h-7 rounded-full hover:bg-slate-800 text-slate-400 hover:text-slate-200 flex items-center justify-center transition-colors"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </motion.div>
  );
};
