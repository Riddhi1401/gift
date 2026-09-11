import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { PhotoCard } from './PhotoCard';
import { useAudio } from './AudioContext';
import { Heart, Sparkles, X, RotateCcw, Lock } from 'lucide-react';

export const SharedFinalPage = ({ data, friends, onSelectMemory, onNavigateHome }) => {
  const [showOneLastThing, setShowOneLastThing] = useState(false);
  const [openedSeals, setOpenedSeals] = useState({});
  const { playTrack } = useAudio();

  const toggleSeal = (id) => {
    setOpenedSeals((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCardInteraction = (memory) => {
    if (memory.song && memory.audioUrl) {
      playTrack(memory.song, memory.audioUrl);
    }
  };

  const handleOneLastThingClick = () => {
    setShowOneLastThing(true);
    // Fire celebratory confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 bg-scrapbook-texture text-slate-100 pt-20 pb-20 px-4 sm:px-8 overflow-x-hidden">
      <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">

        {/* 1. Main Heading & Subtitle */}
        <section className="text-center pt-8 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              The Grand Finale • Squad of 4
            </span>

            <h1 className="text-4xl sm:text-6xl font-serif-display font-extrabold text-white leading-tight mt-2 whitespace-pre-line">
              {data.heading}
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto font-sans mt-3">
              {data.subtitle}
            </p>
          </motion.div>
        </section>

        {/* 2. Squad Members (Group of 4) */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[...friends, ...(data.author ? [data.author] : [])].map((member) => (
            <div
              key={member.id}
              className={`p-5 rounded-2xl bg-slate-900/80 border ${member.accentBorder || 'border-amber-400/40'} shadow-xl flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform`}
            >
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-amber-300 shadow-md">
                <img src={member.cardPhoto} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-2xl">{member.emoji}</div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">{member.name}</h3>
              <p className="text-amber-300 text-xs sm:text-sm font-semibold leading-tight">“{member.title}”</p>
              {member.subtitle && (
                <p className="text-[11px] text-slate-400 line-clamp-2">{member.subtitle}</p>
              )}
            </div>
          ))}
        </section>

        {/* 3. The 9 Shared Squad Memories */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100">
              Our Shared Squad Memories
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">Hover or click any memory to listen to our soundtrack</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.memories.map((photoItem, idx) => (
              <PhotoCard
                key={photoItem.id}
                photo={photoItem.photo}
                caption={photoItem.heading}
                subcaption={photoItem.subcaption}
                song={photoItem.song}
                audioUrl={photoItem.audioUrl}
                tag={photoItem.tag}
                variant="polaroid"
                rotation={idx % 2 === 0 ? -1 : 1}
                onMouseEnter={() => handleCardInteraction(photoItem)}
                onClick={() => {
                  handleCardInteraction(photoItem);
                  if (onSelectMemory) onSelectMemory(photoItem);
                }}
              />
            ))}
          </div>
        </section>

        {/* 4. Common Tribute Message */}
        <section className="max-w-3xl mx-auto bg-slate-900/90 border border-slate-800 p-8 sm:p-10 rounded-3xl text-center shadow-2xl space-y-4">
          <Heart className="w-8 h-8 text-rose-400 mx-auto" />
          <p className="text-slate-200 text-base sm:text-xl leading-relaxed font-sans font-light italic">
            "{data.commonMessage}"
          </p>
        </section>

        {/* 5. THE 4 OF US FOREVER Button */}
        <section className="text-center pt-2">
          <button
            onClick={handleOneLastThingClick}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-rose-400 to-sky-400 text-slate-950 font-extrabold text-base sm:text-lg shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <Sparkles className="w-5 h-5 fill-slate-950" />
            <span>{data.oneLastThing.buttonText}</span>
          </button>
        </section>

        {/* ONE LAST THING Cinematic Full-Screen Reveal Modal */}
        <AnimatePresence>
          {showOneLastThing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl p-4 sm:p-8 flex flex-col justify-between overflow-y-auto"
            >
              {/* Close Modal button */}
              <div className="flex justify-end max-w-5xl mx-auto w-full pt-4">
                <button
                  onClick={() => setShowOneLastThing(false)}
                  className="p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Movie-like Credits Content */}
              <div className="max-w-4xl mx-auto w-full text-center space-y-10 my-auto py-8">
                {/* Floating Memory Pill Tags */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {data.oneLastThing.floatingMemories.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 + idx * 0.15 }}
                      className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-400/40 text-amber-200 font-handwriting text-xl shadow-lg"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Final Closing Group Photo - Complete & Uncropped */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="rounded-3xl overflow-hidden border-2 border-amber-300/40 shadow-2xl bg-slate-950/80 p-1 max-w-3xl mx-auto flex items-center justify-center"
                >
                  <img
                    src={data.oneLastThing.closingGroupPhoto}
                    alt="Final Group Photo"
                    className="max-h-[72vh] w-auto max-w-full rounded-2xl object-contain"
                  />
                </motion.div>

                {/* Final Handwritten Ending Note */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="space-y-4 pt-2"
                >
                  <p className="font-handwriting text-3xl sm:text-5xl text-amber-200 font-bold whitespace-pre-line leading-relaxed">
                    {data.oneLastThing.finalNote}
                  </p>

                  <p className="text-slate-400 text-xs font-mono tracking-widest uppercase pt-2">
                    Janhavi • Prajakta • Siddhi • Riddhi — Forever Chapter
                  </p>
                </motion.div>

                {/* 4 Wax-Sealed Secret Sign-Off Boxes */}
                {data.squadSignOff && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="pt-6 space-y-6"
                  >
                    <div className="text-center space-y-1">
                      <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-bold">
                        Official Chapter Sign-Off 📜✨
                      </span>
                      <p className="text-xs sm:text-sm text-slate-400">
                        Tap any wax-sealed letter to break the seal and reveal their next chapter
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                      {data.squadSignOff.map((person) => {
                        const isOpen = openedSeals[person.id];

                        return (
                          <motion.div
                            key={person.id}
                            layout
                            onClick={() => toggleSeal(person.id)}
                            className={`relative cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden ${
                              isOpen
                                ? 'bg-gradient-to-br from-slate-900/95 via-amber-950/20 to-slate-900 border-amber-400/60 shadow-2xl p-6 ring-1 ring-amber-400/40'
                                : 'bg-slate-900/80 border-slate-800 hover:border-amber-400/40 p-5 hover:bg-slate-900'
                            }`}
                          >
                            {/* Envelope Header / Closed Wax Seal State */}
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-3">
                                {/* Vintage Wax Seal Badge */}
                                <motion.div
                                  animate={isOpen ? { rotate: [0, -10, 10, 0], scale: [1, 1.15, 1] } : {}}
                                  className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg text-amber-100 font-serif font-black text-xs border-2 ${person.sealBorder} bg-gradient-to-br ${person.stampColor} relative`}
                                >
                                  {/* Vintage Stamp Texture */}
                                  <div className="absolute inset-0.5 rounded-full border border-amber-300/40 opacity-70" />
                                  <span>{person.sealInitial}</span>
                                </motion.div>

                                <div>
                                  <h4 className="font-bold text-white text-base font-display">
                                    {person.shortName}
                                  </h4>
                                  <p className="text-[11px] font-mono text-slate-400">
                                    {person.collegeId} • Roll {person.rollNo}
                                  </p>
                                </div>
                              </div>

                              {/* Interactive Tag */}
                              <div className="flex items-center gap-1.5 text-xs font-mono">
                                {isOpen ? (
                                  <span className="text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/30 flex items-center gap-1">
                                    <span>Unsealed</span>
                                    <Sparkles className="w-3 h-3 text-amber-300" />
                                  </span>
                                ) : (
                                  <span className="text-slate-400 hover:text-amber-300 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700 flex items-center gap-1 transition-colors">
                                    <span>Break Seal</span>
                                    <Lock className="w-3 h-3 text-amber-400" />
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Letter Content Revealed with Animation */}
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0, y: -10 }}
                                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.4 }}
                                  className="mt-4 pt-4 border-t border-amber-400/20 space-y-3 font-mono text-xs"
                                >
                                  <div className="grid grid-cols-2 gap-2 text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                                    <div>
                                      <span className="text-[10px] text-amber-400 uppercase tracking-wider block">Full Name</span>
                                      <span className="font-bold text-white text-xs">{person.fullName}</span>
                                    </div>
                                    <div>
                                      <span className="text-[10px] text-amber-400 uppercase tracking-wider block">Batch</span>
                                      <span className="font-bold text-white text-xs">{person.batch}</span>
                                    </div>
                                    <div>
                                      <span className="text-[10px] text-amber-400 uppercase tracking-wider block">College ID</span>
                                      <span className="text-slate-200 text-xs">{person.collegeId}</span>
                                    </div>
                                    <div>
                                      <span className="text-[10px] text-amber-400 uppercase tracking-wider block">Roll No.</span>
                                      <span className="text-slate-200 text-xs">{person.rollNo}</span>
                                    </div>
                                  </div>

                                  {/* Formal Signing Off & Next Destination */}
                                  <div className="p-3 bg-gradient-to-r from-amber-500/10 to-rose-500/10 rounded-xl border border-amber-500/30 space-y-1.5">
                                    <div className="flex items-center justify-between text-amber-300 font-bold text-[11px] tracking-wider uppercase">
                                      <span>Signing Off ✍️</span>
                                      <span className="text-[10px] text-slate-400 font-normal">Next Chapter</span>
                                    </div>
                                    <p className="text-slate-100 text-xs font-sans leading-relaxed">
                                      {person.status}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Replay / Back Home Buttons */}
                <div className="flex items-center justify-center gap-4 pt-8">
                  <button
                    onClick={() => {
                      setShowOneLastThing(false);
                      onNavigateHome();
                    }}
                    className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Replay Memory Book</span>
                  </button>
                </div>
              </div>

              <div />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
