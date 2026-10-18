import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { STORIES } from '../data/products';

interface StoryViewerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToCollection: (col: string) => void;
}

export const StoryViewer: React.FC<StoryViewerProps> = ({
  isOpen,
  onClose,
  onNavigateToCollection
}) => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setCurrentStory(0);
      setProgress(0);
      return;
    }

    const story = STORIES[currentStory];
    const durationMs = story.duration * 1000;
    const intervalMs = 100;
    const step = (intervalMs / durationMs) * 100;

    const timer = setInterval(() => {
      if (!isPaused) {
        setProgress((prev) => {
          if (prev >= 100) {
            if (currentStory < STORIES.length - 1) {
              setCurrentStory(c => c + 1);
              return 0;
            } else {
              onClose();
              return 0;
            }
          }
          return prev + step;
        });
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isOpen, currentStory, isPaused, onClose]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentStory]);

  if (!isOpen) return null;

  const current = STORIES[currentStory];

  const handleNext = () => {
    if (currentStory < STORIES.length - 1) {
      setCurrentStory(c => c + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStory > 0) {
      setCurrentStory(c => c - 1);
      setProgress(0);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      
      {/* Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '420px',
        height: '85vh',
        backgroundColor: '#000',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
      }}>

        {/* Progress bars on top */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          right: '12px',
          display: 'flex',
          gap: '4px',
          zIndex: 20
        }}>
          {STORIES.map((_, i) => (
            <div key={i} style={{ flex: 1, height: '3px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                width: i < currentStory ? '100%' : i === currentStory ? `${progress}%` : '0%',
                background: '#ffffff',
                transition: i === currentStory ? 'width 0.1s linear' : 'none'
              }} />
            </div>
          ))}
        </div>

        {/* Header Title + Controls */}
        <div style={{
          position: 'absolute',
          top: '24px',
          left: '16px',
          right: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 20,
          color: '#ffffff'
        }}>
          <span style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 800,
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            {current.title}
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button 
              onClick={() => setIsPaused(!isPaused)} 
              style={{ color: '#fff', padding: '4px' }}
            >
              {isPaused ? <Play size={18} /> : <Pause size={18} />}
            </button>
            <button 
              onClick={onClose} 
              style={{ color: '#fff', padding: '4px' }}
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <video
          ref={videoRef}
          src={current.videoUrl}
          autoPlay
          playsInline
          muted={false}
          loop
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />

        {/* Tap areas for prev / next */}
        <div 
          onClick={handlePrev}
          style={{ position: 'absolute', top: 0, left: 0, width: '35%', height: '80%', zIndex: 10 }}
        />
        <div 
          onClick={handleNext}
          style={{ position: 'absolute', top: 0, right: 0, width: '35%', height: '80%', zIndex: 10 }}
        />

        {/* Floating pill CTA */}
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20
        }}>
          <button
            onClick={() => {
              onClose();
              onNavigateToCollection(current.linkUrl);
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              color: '#ffffff',
              padding: '10px 24px',
              borderRadius: '30px',
              fontFamily: "'Archivo', sans-serif",
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}
          >
            Shop {current.linkText}
          </button>
        </div>

      </div>

      {/* Outer Arrows for desktop */}
      <button
        onClick={handlePrev}
        disabled={currentStory === 0}
        style={{
          position: 'absolute',
          left: 'calc(50% - 260px)',
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000',
          opacity: currentStory === 0 ? 0.3 : 1
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          right: 'calc(50% - 260px)',
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000'
        }}
      >
        <ChevronRight size={24} />
      </button>

    </div>
  );
};
