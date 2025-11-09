import React from 'react';
import type { SectionProps } from '../../types';
import './Introduction.css';
import { useMocks } from '../../hooks/useMocks';

import logoSecondary from '/images/logo2.svg';

interface IntroductionProps extends SectionProps {
  onButtonClick?: () => void;
}

const Introduction: React.FC<IntroductionProps> = ({ id, className = '', onButtonClick }) => {
  const { introduction: introductionMock } = useMocks();

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      window.open(introductionMock.button.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id={id || 'introduction'} className={`introduction section ${className}`}>
      <div className="container">
        <div className="introduction__wrapper">
          <div className="introduction__content">
            <div className="introduction__image-wrapper">
              <img src={logoSecondary} alt="Logo" className="introduction__logo" />
            </div>
            
            <div className="introduction__text-content">
              <h2 className="introduction__title">
                <span className="introduction__title-accent">{introductionMock.title.accent}</span>
                <span>{introductionMock.title.text}</span>
                <br />
                {introductionMock.title.lineBreak}
              </h2>
              <p className="introduction__subtitle">
                {introductionMock.subtitle}
              </p>
              <button 
                className="introduction__button"
                onClick={handleButtonClick}
              >
                {introductionMock.button.text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

