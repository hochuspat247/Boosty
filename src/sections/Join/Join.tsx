import React from 'react';
import type { SectionProps } from '../../types';
import './Join.css';
import { useMocks } from '../../hooks/useMocks';

import personMaleIcon from '/images/icons/person-male.svg';

interface JoinProps extends SectionProps {
  onGoogleClick?: () => void;
  onTronlinkClick?: () => void;
}

const Join: React.FC<JoinProps> = ({ id, className = '', onGoogleClick, onTronlinkClick }) => {
  const { join: joinMock } = useMocks();

  const handleGoogleClick = () => {
    if (onGoogleClick) {
      onGoogleClick();
    } else {
      window.open(joinMock.buttons.googleUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleTronlinkClick = () => {
    if (onTronlinkClick) {
      onTronlinkClick();
    } else {
      window.open(joinMock.buttons.tronlinkUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id={id || 'join'} className={`join section ${className}`}>
      <div className="container">
        <div className="join__wrapper">
          <div className="join__content">
            <div className="join__icon-wrapper">
              <img src={personMaleIcon} alt="Person" className="join__icon" />
            </div>
            
            <div className="join__text-content">
              <h2 className="join__title">
                <span>{joinMock.title.text}</span>
                <span className="join__title-accent">{joinMock.title.accent}</span>
              </h2>
              <p className="join__subtitle">
                {joinMock.subtitle}
              </p>
            </div>
            
            <div className="join__buttons">
              <button 
                className="join__button join__button--primary"
                onClick={handleGoogleClick}
              >
                {joinMock.buttons.google}
              </button>
              <button 
                className="join__button join__button--secondary"
                onClick={handleTronlinkClick}
              >
                {joinMock.buttons.tronlink}
              </button>
            </div>
          </div>
          
          <div className="join__sphere"></div>
        </div>
      </div>
    </section>
  );
};

export default Join;

