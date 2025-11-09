import React from 'react';
import type { SectionProps } from '../../types';
import './HowItWorks.css';
import { useMocks } from '../../hooks/useMocks';

interface HowItWorksProps extends SectionProps {
}

const HowItWorks: React.FC<HowItWorksProps> = ({ id, className = '' }) => {
  const { howItWorks: howItWorksMock } = useMocks();

  return (
    <section id={id || 'how-it-works'} className={`how-it-works section ${className}`}>
      <div className="container">
        <div className="how-it-works__wrapper">
          <div className="how-it-works__ellipse"></div>
          <h2 className="how-it-works__title">{howItWorksMock.title}</h2>
          
          <div className="how-it-works__content">
            {howItWorksMock.steps.map((step, index) => (
              <div key={index} className="how-it-works__step">
                <div className="how-it-works__step-box">
                  <div className="how-it-works__step-number">{step.number}</div>
                  <img src={step.image} alt={`Step ${step.number}`} />
                  <p className="how-it-works__step-text">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

