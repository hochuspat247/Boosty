import { useLanguage } from './useLanguage';
import { heroMock } from '../sections/Hero/mock';
import { heroMockJa } from '../sections/Hero/mock.ja';
import { howItWorksMock } from '../sections/HowItWorks/mock';
import { howItWorksMockJa } from '../sections/HowItWorks/mock.ja';
import { advantagesMock } from '../sections/Advantages/mock';
import { advantagesMockJa } from '../sections/Advantages/mock.ja';
import { introductionMock } from '../sections/Introduction/mock';
import { introductionMockJa } from '../sections/Introduction/mock.ja';
import { getAtlaMock } from '../sections/GetAtla/mock';
import { getAtlaMockJa } from '../sections/GetAtla/mock.ja';
import { referralCabinetMock } from '../sections/ReferralCabinet/mock';
import { referralCabinetMockJa } from '../sections/ReferralCabinet/mock.ja';
import { pionersMock } from '../sections/Pioners/mock';
import { pionersMockJa } from '../sections/Pioners/mock.ja';
import { joinMock } from '../sections/Join/mock';
import { joinMockJa } from '../sections/Join/mock.ja';
import { footerMock } from '../sections/Footer/mock';
import { footerMockJa } from '../sections/Footer/mock.ja';
import { headerMock } from '../components/Header/mock';
import { headerMockJa } from '../components/Header/mock.ja';
import { appMock } from '../App/mock';
import { appMockJa } from '../App/mock.ja';

export const useMocks = () => {
  const language = useLanguage();
  const isJapanese = language === 'ja';

  return {
    hero: isJapanese ? heroMockJa : heroMock,
    howItWorks: isJapanese ? howItWorksMockJa : howItWorksMock,
    advantages: isJapanese ? advantagesMockJa : advantagesMock,
    introduction: isJapanese ? introductionMockJa : introductionMock,
    getAtla: isJapanese ? getAtlaMockJa : getAtlaMock,
    referralCabinet: isJapanese ? referralCabinetMockJa : referralCabinetMock,
    pioners: isJapanese ? pionersMockJa : pionersMock,
    join: isJapanese ? joinMockJa : joinMock,
    footer: isJapanese ? footerMockJa : footerMock,
    header: isJapanese ? headerMockJa : headerMock,
    app: isJapanese ? appMockJa : appMock,
  };
};

