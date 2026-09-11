import React from 'react';
import { motion } from 'framer-motion';
import { PhotoCard } from './PhotoCard';
import { useAudio } from './AudioContext';
import { ArrowRight, Heart } from 'lucide-react';

export const PrajaktaSection = ({ data, onSelectMemory, onNavigateNext, onNavigateHome }) => {
  const { playTrack } = useAudio();

  const handleCardInteraction = (memory) => {
    if (memory.song && memory.audioUrl) {
      playTrack(memory.song, memory.audioUrl);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 bg-scrapbook-texture text-slate-100 pt-20 pb-16 px-4 sm:px-8 overflow-x-hidden">
      <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">

        {/* 1. Header */}
        <section className="text-center pt-8 pb-4 relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block relative"
          >
            <p className="text-emerald-400 font-mono text-xs sm:text-sm uppercase tracking-widest mb-2 font-bold">
              {data.introTitle}
            </p>

            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-200 via-teal-300 to-amber-200 bg-clip-text text-transparent font-display">
              {data.name}
            </h1>

            <p className="font-handwriting text-2xl sm:text-3xl text-emerald-300/90 mt-2">
              {data.introSubtext}
            </p>
          </motion.div>
        </section>

        {/* 2. Group 1: Sunny Moments & Campus Life */}
        {data.group1Memories && (
          <section className="space-y-6">
            <div className="border-l-4 border-emerald-400 pl-4 py-1">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                {data.group1Title}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">{data.group1Subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.group1Memories.map((story, idx) => (
                <PhotoCard
                  key={story.id}
                  photo={story.photo}
                  caption={story.heading}
                  subcaption={story.subcaption}
                  song={story.song}
                  audioUrl={story.audioUrl}
                  tag={story.tag}
                  variant="polaroid"
                  rotation={idx % 2 === 0 ? -1 : 1}
                  onMouseEnter={() => handleCardInteraction(story)}
                  onClick={() => {
                    handleCardInteraction(story);
                    onSelectMemory(story);
                  }}
                />
              ))}
            </div>
          </section>
        )}

        {/* 3. Group 2: Trip Fun & Goofy Banter */}
        {data.group2Memories && (
          <section className="space-y-6">
            <div className="border-l-4 border-emerald-400 pl-4 py-1">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                {data.group2Title}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">{data.group2Subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.group2Memories.map((story, idx) => (
                <PhotoCard
                  key={story.id}
                  photo={story.photo}
                  caption={story.heading}
                  subcaption={story.subcaption}
                  song={story.song}
                  audioUrl={story.audioUrl}
                  tag={story.tag}
                  variant="polaroid"
                  rotation={idx % 2 === 0 ? 2 : -2}
                  onMouseEnter={() => handleCardInteraction(story)}
                  onClick={() => {
                    handleCardInteraction(story);
                    onSelectMemory(story);
                  }}
                />
              ))}
            </div>
          </section>
        )}

        {/* 4. Group 3: Traditions, Sunshine & Live Motion */}
        {data.group3Memories && (
          <section className="space-y-6">
            <div className="border-l-4 border-emerald-400 pl-4 py-1">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                {data.group3Title}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">{data.group3Subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.group3Memories.map((story, idx) => (
                <PhotoCard
                  key={story.id}
                  photo={story.photo}
                  video={story.video}
                  caption={story.heading}
                  subcaption={story.subcaption}
                  song={story.song}
                  audioUrl={story.audioUrl}
                  tag={story.tag}
                  variant="polaroid"
                  rotation={idx % 2 === 0 ? -1 : 1}
                  onMouseEnter={() => handleCardInteraction(story)}
                  onClick={() => {
                    handleCardInteraction(story);
                    onSelectMemory(story);
                  }}
                />
              ))}
            </div>
          </section>
        )}

        {/* 5. A Heartfelt Note */}
        <section className="pt-4 space-y-6">
          <div className="relative rounded-3xl overflow-hidden border border-emerald-400/30 shadow-2xl bg-slate-900">
            <div className="p-6 sm:p-10 bg-slate-900/90 backdrop-blur-md">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-2">
                {data.emotionalTitle}
              </span>
              <p className="text-slate-200 text-base sm:text-xl leading-relaxed font-sans font-light italic">
                "{data.emotionalMessage}"
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
                <span className="font-handwriting text-2xl text-emerald-300">
                  {data.endingStatus}
                </span>
                <span className="text-xs text-slate-500 font-mono">Prajakta</span>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
          <button
            onClick={onNavigateHome}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors text-sm font-semibold"
          >
            ← Back to Home
          </button>

          <button
            onClick={() => onNavigateNext('siddhi')}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <span>Next: Siddhi’s Section</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
