import React from 'react';
import type { SectionProps } from '../../types';
import './Hero.css';
import { useMocks } from '../../hooks/useMocks';

import checkIcon from '/images/icons/check.svg';
import checkIconAlt from '/images/icons/check1.svg';
import arrowRightIcon from '/images/icons/group39550.svg';

interface HeroProps extends SectionProps {
  onButtonClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ id, className = '', onButtonClick }) => {
  const { hero: heroMock } = useMocks();

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      window.open(heroMock.button.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id={id || 'hero'} className={`hero ${className}`}>
      <p className="hero__decorative-text hero__decorative-text--left">{heroMock.decorativeText}</p>
      <p className="hero__decorative-text hero__decorative-text--right">{heroMock.decorativeText}</p>

      <div className="container">
        <div className="hero__content">
          <div className="hero__title-wrapper">
            <h1 className="hero__title">
              <span className="hero__title-brand">{heroMock.title.brand}</span>
              <span className="hero__title-main">{heroMock.title.main}</span>
            </h1>
            <h2 className="hero__title-sub">
              <span className="hero__title-accent">{heroMock.subtitle.accent}</span>
              <span className="hero__title-real">{heroMock.subtitle.real}</span>
              <span className="hero__title-income">{heroMock.subtitle.income}</span>
            </h2>
          </div>

          <div className="hero__features">
            {heroMock.features.map((feature, index) => (
              <div key={index} className="hero__feature">
                <img src={index === 0 ? checkIcon : checkIconAlt} alt="" className="hero__feature-icon" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__cta-wrapper">
          <button className="hero__button" onClick={handleButtonClick}>
            <span className="hero__button-text">{heroMock.button.text}</span>
          </button>
          <div className="hero__button-gradient"></div>
          <div className="hero__button-icon">
            <img src={arrowRightIcon} alt="" aria-hidden="true" />
          </div>
        </div>

        <div className="hero__stats">
          {heroMock.stats.map((stat, index) => (
            <div key={index} className="hero__stat-card">
              <p className="hero__stat-value">{stat.value}</p>
              <p className="hero__stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
