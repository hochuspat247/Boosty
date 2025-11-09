import React from 'react';
import type { SectionProps } from '../../types';
import './Advantages.css';
import { useMocks } from '../../hooks/useMocks';

interface AdvantagesProps extends SectionProps {
}

const Advantages: React.FC<AdvantagesProps> = ({ id, className = '' }) => {
  const { advantages: advantagesMock } = useMocks();

  return (
    <section id={id || 'advantages'} className={`advantages section ${className}`}>
      <div className="container">
        <div className="advantages__wrapper">
          <h2 className="advantages__title">
            {advantagesMock.title.text}<span className="advantages__title-accent">{advantagesMock.title.accent}</span>
          </h2>
          
          <div className="advantages__content">
            {advantagesMock.cards.map((advantage, index) => (
              <div key={index} className="advantages__card">
                <div className="advantages__card-icon">
                  <img src={advantage.icon} alt={advantage.title} />
                </div>
                <h3 className="advantages__card-title">{advantage.title}</h3>
                <p className="advantages__card-description">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;


