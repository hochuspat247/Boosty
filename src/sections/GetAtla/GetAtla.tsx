import React from 'react';
import type { SectionProps } from '../../types';
import './GetAtla.css';
import { useMocks } from '../../hooks/useMocks';

import handImage from '/images/hand.svg';

interface GetAtlaProps extends SectionProps {
  onButtonClick?: () => void;
}

const GetAtla: React.FC<GetAtlaProps> = ({ id, className = '', onButtonClick }) => {
  const { getAtla: getAtlaMock } = useMocks();

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      window.open(getAtlaMock.button.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id={id || 'get-atla'} className={`get-atla section ${className}`}>
      <div className="container">
        <div className="get-atla__wrapper">
          <div className="get-atla__content">
            <div className="get-atla__text-content">
              <h3 className="get-atla__subtitle">{getAtlaMock.subtitle}</h3>
              
              <div className="get-atla__price-block">
                <h2 className="get-atla__title">
                  <span className="get-atla__title-text">{getAtlaMock.prices[0].text}</span>
                  <span className="get-atla__title-accent">{getAtlaMock.prices[0].accent}</span>
                </h2>
              </div>
              
              <p className="get-atla__description">{getAtlaMock.description}</p>
              
              <div className="get-atla__price-block">
                <h2 className="get-atla__title">
                  <span className="get-atla__title-text">{getAtlaMock.prices[1].text}</span>
                  <span className="get-atla__title-accent">{getAtlaMock.prices[1].accent}</span>
                </h2>
              </div>
              
              <button 
                className="get-atla__button"
                onClick={handleButtonClick}
              >
                {getAtlaMock.button.text}
              </button>
            </div>
            
            <div className="get-atla__image-wrapper">
              <img src={handImage} alt="Hand with phone" className="get-atla__hand-image" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="get-atla__ellipse"></div>
      <div className="get-atla__sphere"></div>
    </section>
  );
};

export default GetAtla;

