import styles from './ReviewsSection.module.css';
import Section from '../Section/Section';
import ReviewsList from '../ReviewsList/ReviewsList';
import Button from 'components/Button/Button';

const ReviewsSection = () => {
  return (
    <Section
      id="reviews"
      className={styles['reviews-section']}
      title="What our customers say"
    >
      <ReviewsList horizontal={true} />
      <Button outline={true} className={styles['reviews-catalog-btn']}>
        View catalog
      </Button>
    </Section>
  );
};

export default ReviewsSection;
