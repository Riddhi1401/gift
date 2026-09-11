import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Sparkles } from 'lucide-react';

export const MemoryModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-2xl w-full bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl text-slate-100 max-h-[90vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-950/70 hover:bg-slate-950 text-slate-300 hover:text-white flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Media (Photo or Video) */}
          {data.video ? (
            <div className="relative max-h-96 w-full overflow-hidden bg-slate-950 flex items-center justify-center p-2">
              <video
                src={data.video}
                controls
                autoPlay
                loop
                className="max-h-92 w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          ) : data.photo ? (
            <div className="relative max-h-96 w-full overflow-hidden bg-slate-950 flex items-center justify-center p-2">
              <img src={data.photo} alt={data.title || data.caption} className="max-h-92 w-auto max-w-full object-contain rounded-lg" />
            </div>
          ) : null}

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              {data.status && (
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                  data.status.includes('PRESENT') ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                }`}>
                  {data.status}
                </span>
              )}
              {data.date && (
                <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {data.date}
                </span>
              )}
              {data.location && (
                <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  {data.location}
                </span>
              )}
            </div>

            <h3 className="text-2xl font-bold font-display text-white">
              {data.title || data.caption || data.memory}
            </h3>

            {(data.details || data.story || data.subcaption || data.description) && (
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {data.details || data.story || data.subcaption || data.description}
              </p>
            )}

            {data.song && (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs sm:text-sm flex items-center gap-2">
                <span className="text-base">🎵</span>
                <span className="font-semibold text-amber-300">{data.song}</span>
              </div>
            )}

            {data.verdict && (
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>Official Verdict:</strong> {data.verdict}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
