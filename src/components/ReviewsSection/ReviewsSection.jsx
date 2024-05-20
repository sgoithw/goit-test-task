import styles from './ReviewsSection.module.css';
import Section from '../Section/Section';
import ReviewsList from '../ReviewsList/ReviewsList';
import Button from 'components/Button/Button';
import { NavLink } from 'react-router-dom';

const ReviewsSection = () => {
  const reviews = [
    {
      reviewer_name: 'Sara Connor',
      reviewer_rating: 5,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget.',
    },
    {
      reviewer_name: 'Sara Connor',
      reviewer_rating: 5,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget.',
    },
    {
      reviewer_name: 'Sara Connor',
      reviewer_rating: 5,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget.',
    },
    {
      reviewer_name: 'Sara Connor',
      reviewer_rating: 5,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget.',
    },
    {
      reviewer_name: 'Sara Connor',
      reviewer_rating: 5,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget.',
    },
  ];

  return (
    <Section
      id="reviews"
      className={styles['reviews-section']}
      title="What our customers say"
    >
      <ReviewsList horizontal={true} reviews={reviews} />
      <NavLink to="/catalog">
        <Button outline={true} className={styles['reviews-catalog-btn']}>
          View catalog
        </Button>
      </NavLink>
    </Section>
  );
};

export default ReviewsSection;
