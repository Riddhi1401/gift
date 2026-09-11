import React from 'react';
import { motion } from 'framer-motion';
import { useAudio } from './AudioContext';
import { memoriesData } from '../data/memoriesData';
import { Sparkles, Music, ArrowRight, Heart } from 'lucide-react';

export const LandingPage = ({ onSelectCharacter, onExploreAll }) => {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <div className="relative min-h-screen flex flex-col justify-between p-4 sm:p-8 bg-slate-950 bg-film-grain overflow-hidden">
      {/* Ambient background glow spheres */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header / Music Toggle */}
      <div className="relative z-10 flex items-center justify-between max-w-6xl w-full mx-auto pt-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span className="font-handwriting text-2xl text-amber-200">The 4-Year Memory Vault</span>
        </div>

        <button
          onClick={togglePlay}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 shadow-lg ${
            isPlaying
              ? 'bg-amber-500 text-slate-950 shadow-amber-500/20'
              : 'bg-slate-900/90 text-amber-300 border border-amber-500/40 hover:bg-slate-800'
          }`}
        >
          <Music className={`w-4 h-4 ${isPlaying ? 'animate-bounce' : ''}`} />
          <span>{isPlaying ? '♫ Music Playing' : memoriesData.globalInfo.musicPrompt}</span>
        </button>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center my-8 sm:my-12 px-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.15]">
            Four years. One squad. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-200 via-rose-300 to-sky-300 bg-clip-text text-transparent">
              One unforgettable chapter.
            </span>
          </h1>
          
          <p className="mt-4 sm:mt-6 text-slate-300 text-base sm:text-xl max-w-xl mx-auto font-sans font-light">
            {memoriesData.globalInfo.siteSubtitle}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-amber-400 text-sm font-medium">
            <span>{memoriesData.globalInfo.characterPrompt}</span>
          </div>
        </motion.div>
      </div>

      {/* 3 Interactive Character Selection Cards */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-2 my-4">
        {memoriesData.friends.map((friend, idx) => (
          <motion.div
            key={friend.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectCharacter(friend.id)}
            className={`group relative rounded-3xl p-6 bg-gradient-to-b ${friend.themeColor} bg-slate-900/90 border ${friend.accentBorder} shadow-2xl cursor-pointer overflow-hidden flex flex-col justify-between min-h-[420px] backdrop-blur-md transition-all duration-300`}
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${friend.badgeColor}`}>
                {friend.name.toUpperCase()}
              </span>
              <span className="text-3xl transform group-hover:scale-125 transition-transform duration-300">
                {friend.emoji}
              </span>
            </div>

            {/* Photo Placeholder Container */}
            <div className="relative my-4 aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700/60 shadow-inner group-hover:border-amber-400/50 transition-colors">
              <img
                src={friend.cardPhoto}
                alt={friend.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3">
                <span className="font-handwriting text-2xl text-amber-200 block drop-shadow-md">
                  {friend.name}
                </span>
              </div>
            </div>

            {/* Nickname Title & Subtitle */}
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-amber-300 transition-colors">
                “{friend.title}”
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                {friend.subtitle}
              </p>

              {/* Action Prompt */}
              <div className="mt-4 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
                <span>Explore {friend.name}'s story</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Shared Page Shortcut */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mt-8 pb-4">
        <button
          onClick={onExploreAll}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-rose-300 text-xs sm:text-sm font-medium transition-colors"
        >
          <Heart className="w-4 h-4 text-rose-400" />
          <span>Or skip directly to the 4 of us shared collage →</span>
        </button>
      </div>
    </div>
  );
};
