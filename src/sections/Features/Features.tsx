import React from 'react';
import type { Feature, SectionProps } from '../../types';
import './Features.css';

interface FeaturesProps extends SectionProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

const Features: React.FC<FeaturesProps> = ({
  title,
  subtitle,
  features,
  columns = 3,
  id,
  className = '',
}) => {
  return (
    <section id={id || 'features'} className={`features section ${className}`}>
      <div className="container">
        {(title || subtitle) && (
          <div className="features__header">
            {title && <h2 className="features__title">{title}</h2>}
            {subtitle && <p className="features__subtitle">{subtitle}</p>}
          </div>
        )}
        <div className={`features__grid features__grid--${columns}`}>
          {features.map((feature, index) => (
            <div key={index} className="features__item">
              {feature.icon && (
                <div className="features__icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
              )}
              <h3 className="features__item-title">{feature.title}</h3>
              <p className="features__item-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

