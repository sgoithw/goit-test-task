import ReviewsListItem from '../ReviewsListItem/ReviewsListItem';
import style from './ReviewsList.module.css';

const ReviewsList = ({ horizontal = false }) => {
  const reviews = [
    {
      id: (Math.random() * 1000).toFixed(32),
      name: 'Sara Connor',
      rate: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget.',
    },
    {
      id: (Math.random() * 1000).toFixed(32),
      name: 'Sara Connor',
      rate: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget.',
    },
    {
      id: (Math.random() * 1000).toFixed(32),
      name: 'Sara Connor',
      rate: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget.',
    },
    {
      id: (Math.random() * 1000).toFixed(32),
      name: 'Sara Connor',
      rate: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget.',
    },
    {
      id: (Math.random() * 1000).toFixed(32),
      name: 'Sara Connor',
      rate: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget.',
    },
  ];
  return (
    <ul
      className={
        horizontal ? style['reviews-list-horisontal'] : style['reviews-list']
      }
    >
      {reviews.map(r => (
        <ReviewsListItem horizontal={horizontal} review={r} key={r.id} />
      ))}
    </ul>
  );
};

export default ReviewsList;
