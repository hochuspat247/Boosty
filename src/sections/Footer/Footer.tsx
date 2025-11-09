import React from 'react';
import type { SectionProps } from '../../types';
import './Footer.css';
import { useMocks } from '../../hooks/useMocks';

import logoImg from '/images/logo/logo.svg';
import boostyfiFooterImg from '/images/boostyfi-footer.svg';
import instaIcon from '/images/insta.svg';
import diskIcon from '/images/disk.svg';
import xIcon from '/images/X.svg';
import telegramIcon from '/images/telegram.svg';
import arrowUpIcon from '/images/arrow-up.svg';

interface FooterProps extends SectionProps {
  onScrollToTop?: () => void;
}

const Footer: React.FC<FooterProps> = ({ id, className = '', onScrollToTop }) => {
  const { footer: footerMock } = useMocks();

  const handleScrollToTop = () => {
    if (onScrollToTop) {
      onScrollToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const socialIcons = [instaIcon, diskIcon, xIcon, telegramIcon];

  return (
    <footer id={id || 'footer'} className={`footer section ${className}`}>
      <div className="container">
        <div className="footer__top">
          <div className="footer__logo-wrapper">
            <img src={logoImg} alt={footerMock.logo.alt} className="footer__logo" />
          </div>
          
          <div className="footer__left">
            {footerMock.links.length > 0 && (
              <div className="footer__links">
                {footerMock.links.map((link, index) => (
                  <a key={index} href={link.href} className="footer__link">{link.text}</a>
                ))}
              </div>
            )}
            
            <button 
              className="footer__scroll-top footer__scroll-top--mobile"
              onClick={handleScrollToTop}
              aria-label={footerMock.scrollTop.ariaLabel}
            >
              <img src={arrowUpIcon} alt={footerMock.scrollTop.ariaLabel} />
            </button>
          </div>
          
          <div className="footer__social">
            {footerMock.social.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                className="footer__social-link" 
                aria-label={social.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialIcons[index]} alt={social.name} />
              </a>
            ))}
          </div>
          
          <button 
            className="footer__scroll-top footer__scroll-top--desktop"
            onClick={handleScrollToTop}
            aria-label={footerMock.scrollTop.ariaLabel}
          >
            <img src={arrowUpIcon} alt={footerMock.scrollTop.ariaLabel} />
          </button>
        </div>
      </div>
      
      <div className="footer__bottom">
        <img src={boostyfiFooterImg} alt={footerMock.bottomLogo.alt} className="footer__logo-bottom" />
      </div>
    </footer>
  );
};

export default Footer;

