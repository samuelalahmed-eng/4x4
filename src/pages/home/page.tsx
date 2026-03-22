import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import BooksTeaserSection from './components/BooksTeaserSection';
import TargetSection from './components/TargetSection';
import RegistrationSection from './components/RegistrationSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className="font-cairo">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <BooksTeaserSection />
        <TargetSection />
        <RegistrationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
