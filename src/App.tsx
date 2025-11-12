import Header from './components/Header';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import Advantages from './sections/Advantages';
import Introduction from './sections/Introduction';
import GetAtla from './sections/GetAtla';
import ReferralCabinet from './sections/ReferralCabinet';
import Pioners from './sections/Pioners';
import Join from './sections/Join';
import Footer from './sections/Footer';
import { useMocks } from './hooks/useMocks';
import './App.css';

function App() {
  const { app: appMock } = useMocks();

  return (
    <div className="app">
      <Header
        navItems={appMock.navItems}
      />

      <main className="app__main">
        <Hero 
          id="hero" 
        />
        
        <HowItWorks id="how-it-works" />
        
        <div className="unified-mobile-bg">
        <Advantages id="advantages" />
        
        <Introduction 
          id="introduction"
        />
        </div>
        
        <GetAtla 
          id="get-atla"
        />
        
        <ReferralCabinet 
          id="referral-cabinet"
        />
        
        <Pioners id="community" />
        
        <Join 
          id="join"
        />
      </main>
      
      <Footer 
        id="footer"
        onScrollToTop={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}

export default App;
