import ReviewsListItem from '../ReviewsListItem/ReviewsListItem';
import style from './ReviewsList.module.css';

const ReviewsList = ({ horizontal = false, reviews }) => {
  return (
    <ul
      className={
        horizontal ? style['reviews-list-horisontal'] : style['reviews-list']
      }
    >
      {reviews.map((r, i) => (
        <ReviewsListItem horizontal={horizontal} review={r} key={i} />
      ))}
    </ul>
  );
};

export default ReviewsList;
