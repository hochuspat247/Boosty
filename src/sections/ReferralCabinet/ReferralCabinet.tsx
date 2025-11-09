import React, { useState } from 'react';
import type { SectionProps } from '../../types';
import './ReferralCabinet.css';
import { useMocks } from '../../hooks/useMocks';

import arrowLeftIcon from '/images/arrow-left.svg';

interface ReferralCabinetProps extends SectionProps {
  onButtonClick?: () => void;
}

const ReferralCabinet: React.FC<ReferralCabinetProps> = ({ id, className = '', onButtonClick }) => {
  const { referralCabinet: referralCabinetMock } = useMocks();
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      window.open(referralCabinetMock.button.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id={id || 'referral-cabinet'} className={`referral-cabinet section ${className}`}>
      <div className="container">
        <div className="referral-cabinet__wrapper">
          <h2 className="referral-cabinet__title">
            {referralCabinetMock.title}
          </h2>
          
          <div className="referral-cabinet__accordion">
            {referralCabinetMock.items.map((item) => (
              <div key={item.id} className="referral-cabinet__item">
                <button
                  className="referral-cabinet__item-header"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={openItems.has(item.id)}
                >
                  <span className="referral-cabinet__item-title">{item.title}</span>
                  <img
                    src={arrowLeftIcon}
                    alt="Toggle"
                    className={`referral-cabinet__item-icon ${openItems.has(item.id) ? 'referral-cabinet__item-icon--open' : ''}`}
                  />
                </button>
                {openItems.has(item.id) && (
                  <div className="referral-cabinet__item-content">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <button 
            className="referral-cabinet__button"
            onClick={handleButtonClick}
          >
            {referralCabinetMock.button.text}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReferralCabinet;


