import React, { useState } from 'react';
import { AudioProvider } from './components/AudioContext';
import { MusicPlayer } from './components/MusicPlayer';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { JanhaviSection } from './components/JanhaviSection';
import { PrajaktaSection } from './components/PrajaktaSection';
import { SiddhiSection } from './components/SiddhiSection';
import { SharedFinalPage } from './components/SharedFinalPage';
import { MemoryModal } from './components/MemoryModal';
import { memoriesData } from './data/memoriesData';

export function App() {
  const [activeSection, setActiveSection] = useState('landing');
  const [selectedMemory, setSelectedMemory] = useState(null);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const janhaviData = memoriesData.friends.find((f) => f.id === 'janhavi');
  const prajaktaData = memoriesData.friends.find((f) => f.id === 'prajakta');
  const siddhiData = memoriesData.friends.find((f) => f.id === 'siddhi');

  return (
    <AudioProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 relative">
        {/* Navigation Bar */}
        <Navigation
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />

        {/* Persistent Floating Music Player */}
        <MusicPlayer />

        {/* Active Section Renderer */}
        <main>
          {activeSection === 'landing' && (
            <LandingPage
              onSelectCharacter={(charId) => handleNavigate(charId)}
              onExploreAll={() => handleNavigate('final')}
            />
          )}

          {activeSection === 'janhavi' && (
            <JanhaviSection
              data={janhaviData}
              onSelectMemory={(mem) => setSelectedMemory(mem)}
              onNavigateNext={(nextId) => handleNavigate(nextId)}
              onNavigateHome={() => handleNavigate('landing')}
            />
          )}

          {activeSection === 'prajakta' && (
            <PrajaktaSection
              data={prajaktaData}
              onSelectMemory={(mem) => setSelectedMemory(mem)}
              onNavigateNext={(nextId) => handleNavigate(nextId)}
              onNavigateHome={() => handleNavigate('landing')}
            />
          )}

          {activeSection === 'siddhi' && (
            <SiddhiSection
              data={siddhiData}
              onSelectMemory={(mem) => setSelectedMemory(mem)}
              onNavigateNext={(nextId) => handleNavigate(nextId)}
              onNavigateHome={() => handleNavigate('landing')}
            />
          )}

          {activeSection === 'final' && (
            <SharedFinalPage
              data={memoriesData.sharedFinalPage}
              friends={memoriesData.friends}
              onSelectMemory={(mem) => setSelectedMemory(mem)}
              onNavigateHome={() => handleNavigate('landing')}
            />
          )}
        </main>

        {/* Global Memory Detail Lightbox Modal */}
        <MemoryModal
          isOpen={!!selectedMemory}
          onClose={() => setSelectedMemory(null)}
          data={selectedMemory}
        />
      </div>
    </AudioProvider>
  );
}

export default App;
