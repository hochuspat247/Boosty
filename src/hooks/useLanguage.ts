import { useLocation } from 'react-router-dom';

export const useLanguage = () => {
  const location = useLocation();
  const isJapanese = location.pathname.startsWith('/JAP');
  return isJapanese ? 'ja' : 'en';
};

