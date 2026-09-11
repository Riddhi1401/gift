import React from 'react';
import { motion } from 'framer-motion';
import { Home, Sparkles, ArrowLeft, Heart } from 'lucide-react';
import { memoriesData } from '../data/memoriesData';

export const Navigation = ({ activeSection, onNavigate, visitedCount = 0 }) => {
  const isLanding = activeSection === 'landing';
  if (isLanding) return null; // Landing page has its own immersive character selection

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 px-4 py-3"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Back to characters Home button */}
        <button
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs sm:text-sm text-slate-300 hover:text-white transition-all shadow-sm group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back home</span>
        </button>

        {/* Friend Section Switcher Tabs */}
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1">
          {memoriesData.friends.map((friend) => {
            const isActive = activeSection === friend.id;
            return (
              <button
                key={friend.id}
                onClick={() => onNavigate(friend.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-semibold shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <span>{friend.emoji}</span>
                <span className="hidden xs:inline">{friend.name}</span>
              </button>
            );
          })}

          {/* Shared Final Page Button */}
          <button
            onClick={() => onNavigate('final')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeSection === 'final'
                ? 'bg-rose-500 text-white font-semibold shadow-md shadow-rose-500/20'
                : 'text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 border border-rose-500/20'
            }`}
          >
            <Heart className="w-3.5 h-3.5 fill-rose-400" />
            <span className="hidden xs:inline">Our Squad</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
};
