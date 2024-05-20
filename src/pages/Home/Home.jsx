import HeroSection from 'components/HeroSection/HeroSection';
import styles from './Home.module.css';
import GallerySection from 'components/GallerySection/GallerySection';
import ReviewsSection from 'components/ReviewsSection/ReviewsSection';
import SupportSection from 'components/SupportSection/SupportSection';
import OurFeturesSection from 'components/OurFeturesSection/OurFeturesSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurFeturesSection />
      <GallerySection />
      <ReviewsSection reviews />
      <SupportSection />
    </>
  );
};

export default Home;
