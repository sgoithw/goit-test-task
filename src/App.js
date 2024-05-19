import Header from 'components/Header/Header';
import './App.css';
import Footer from 'components/Footer/Footer';
import HeroSection from 'components/HeroSection/HeroSection';
import OurFeaturesSection from 'components/OurFeturesSection/OurFeaturesSection';
import GallerySection from 'components/GallerySection/GallerySection';
import ReviewsSection from 'components/ReviewsSection/ReviewsSection';
import SupportSection from 'components/SupportSection/SupportSection';
import VanFilter from 'components/VanFilter/VanFIlter';
import CampersList from 'components/CampersList/CampersList';
import Button from 'components/Button/Button';
import CamperDetailsModal from 'components/CamperDetailsModal/CamperDetailsModal';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <HeroSection />
        <OurFeaturesSection />
        <GallerySection />
        <ReviewsSection />
        <SupportSection />
        <section id="catalog" className="catalog-section">
          <div className="container">
            <div className="sidebar">
              <VanFilter />
            </div>
            <div className="catalog">
              <CampersList />
              <Button id="load-more"> Load more</Button>
            </div>
          </div>
        </section>
        <CamperDetailsModal />
      </main>
      <Footer />
    </>
  );
}

export default App;
