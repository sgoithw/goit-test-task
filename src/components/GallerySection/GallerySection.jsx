import GalleryList from 'components/GalleryList/GalleryList';
import styles from './GallerySection.module.css';
import Section from 'components/Section/Section';

const GallerySection = () => {
  return (
    <Section
      id="gallery"
      className={styles['gallery-section']}
      title="Create unforgateble memories"
      outOfContainer={true}
    >
      <GalleryList />
    </Section>
  );
};

export default GallerySection;
