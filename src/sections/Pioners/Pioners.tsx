import React, { useState, useRef } from 'react';
import type { SectionProps } from '../../types';
import './Pioners.css';
import { useMocks } from '../../hooks/useMocks';

import arrowSmallIcon from '/images/arrow-small.svg';
import arrowSmallCircleIcon from '/images/arrow-small-circle.svg';
import patternImg from '/images/Pattern.svg';
import arrowsDoubleImg from '/images/arrows-double.svg';

interface PionersProps extends SectionProps {}

const Pioners: React.FC<PionersProps> = ({ id, className = '' }) => {
  const { pioners: pionersMock } = useMocks();
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const currentPioneer = pionersMock.pioneers[currentIndex];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < pionersMock.pioneers.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id={id || 'community'} className={`pioners section ${className}`}>
      <div className="container">
        <div className="pioners__wrapper">
          <h2 className="pioners__title">{pionersMock.title}</h2>
          
          <div className="pioners__content">
            <div className="pioners__pattern">
              <img src={patternImg} alt="Pattern" />
            </div>
            
            <div className="pioners__arrows-image">
              <img src={arrowsDoubleImg} alt="Arrows" />
            </div>
            
            <button 
              className={`pioners__nav-button pioners__nav-button--prev ${currentIndex === 0 ? 'pioners__nav-button--disabled' : ''}`}
              onClick={handlePrev}
              aria-label="Previous"
              disabled={currentIndex === 0}
            >
              <img 
                src={currentIndex === 0 ? arrowSmallIcon : arrowSmallCircleIcon} 
                alt="Previous" 
              />
            </button>
            
            <div 
              key={currentIndex}
              className="pioners__card"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="pioners__card-image-wrapper">
                <img src={currentPioneer.image} alt={currentPioneer.name} className="pioners__card-image" />
              </div>
              
              <div className="pioners__card-content">
                <div className="pioners__meta">
                  <h3 className="pioners__name">{currentPioneer.name}, {currentPioneer.location}</h3>
                  <p className="pioners__date">{currentPioneer.date}</p>
                </div>
                
                <p className="pioners__description">{currentPioneer.description}</p>
              </div>
              
              <div className="pioners__card-sphere"></div>
            </div>
            
            <button 
              className={`pioners__nav-button pioners__nav-button--next ${currentIndex === pionersMock.pioneers.length - 1 ? 'pioners__nav-button--disabled' : ''}`}
              onClick={handleNext}
              aria-label="Next"
              disabled={currentIndex === pionersMock.pioneers.length - 1}
            >
              <img 
                src={currentIndex === pionersMock.pioneers.length - 1 ? arrowSmallIcon : arrowSmallCircleIcon} 
                alt="Next" 
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pioners;

