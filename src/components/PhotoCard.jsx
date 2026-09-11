import React from 'react';
import { motion } from 'framer-motion';

export const PhotoCard = ({
  photo,
  video,
  caption,
  subcaption,
  date,
  tag,
  song,
  audioUrl,
  songReason,
  variant = 'polaroid', // 'polaroid' | 'scrapbook' | 'filmstrip' | 'minimal'
  rotation = 0,
  onClick,
  onMouseEnter,
  className = ''
}) => {
  const rotationClasses = [
    '-rotate-3', '-rotate-2', '-rotate-1', 'rotate-0', 'rotate-1', 'rotate-2', 'rotate-3'
  ];
  const rotClass = typeof rotation === 'number' ? rotationClasses[Math.abs(rotation) % rotationClasses.length] : rotation;

  if (variant === 'polaroid') {
    return (
      <motion.div
        whileHover={{ scale: 1.03, rotate: 0, zIndex: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        className={`bg-stone-50 text-slate-900 p-3 sm:p-4 pb-6 sm:pb-8 shadow-xl rounded-sm border border-stone-200 cursor-pointer transform transition-all ${rotClass} ${className}`}
      >
        <div className="relative overflow-hidden aspect-[4/5] bg-stone-900 mb-3 rounded-xs group flex items-center justify-center">
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <img
              src={photo}
              alt={caption || "Memory photo"}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          )}
          {tag && (
            <span className="absolute top-2 right-2 px-2 py-0.5 bg-slate-900/80 backdrop-blur-xs text-amber-300 text-[10px] font-medium rounded-full z-10">
              {tag}
            </span>
          )}
          {song && (
            <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/85 backdrop-blur-xs text-amber-300 px-2 py-1 rounded text-[11px] font-mono flex items-center justify-between z-10">
              <span className="flex items-center gap-1 truncate">
                <span className="animate-pulse">▶</span>
                <span className="truncate">{song}</span>
              </span>
            </div>
          )}
        </div>
        {caption && (
          <p className="font-handwriting text-xl sm:text-2xl text-slate-800 leading-tight px-1 font-bold">
            {caption}
          </p>
        )}
        {subcaption && (
          <p className="text-xs text-slate-600 mt-1 px-1 font-sans">
            {subcaption}
          </p>
        )}
        {(song || date) && (
          <div className="mt-3 pt-2 border-t border-stone-200/80 flex items-center justify-between text-xs px-1">
            {song && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-full">
                <span>🎵</span>
                <span className="truncate max-w-[170px]">{song}</span>
              </span>
            )}
            {date && (
              <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider ml-auto">
                {date}
              </span>
            )}
          </div>
        )}
      </motion.div>
    );
  }

  if (variant === 'scrapbook') {
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        onClick={onClick}
        className={`relative bg-amber-50/10 backdrop-blur-xs border border-amber-400/30 p-4 rounded-xl shadow-lg washi-tape cursor-pointer ${className}`}
      >
        <div className="overflow-hidden rounded-lg aspect-video mb-3 border border-amber-300/20">
          <img src={photo} alt={caption} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        {tag && <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">{tag}</span>}
        {caption && <h4 className="font-handwriting text-2xl text-amber-200 mt-1">{caption}</h4>}
        {subcaption && <p className="text-xs text-slate-300 mt-1 leading-relaxed">{subcaption}</p>}
      </motion.div>
    );
  }

  return (
    <div onClick={onClick} className={`relative overflow-hidden rounded-xl bg-slate-900 border border-slate-800 shadow-xl cursor-pointer ${className}`}>
      <img src={photo} alt={caption} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-4 flex flex-col justify-end">
        {caption && <p className="font-semibold text-white text-base">{caption}</p>}
        {subcaption && <p className="text-xs text-slate-300 mt-0.5">{subcaption}</p>}
      </div>
    </div>
  );
};
