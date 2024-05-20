import style from './ReviewsListItem.module.css';

const ReviewsListItem = ({
  review: { reviewer_name, reviewer_rating, comment },
  horizontal = false,
}) => {
  return (
    <li
      className={
        horizontal
          ? style['reviews-list-item-horisontal']
          : style['reviews-list-item']
      }
    >
      <div className={style['reviews-user-info']}>
        <span className={style['reviews-user-fl']}>
          {reviewer_name.slice(0, 1).toUpperCase()}
        </span>
        <div className={style['reviews-user-rate-holder']}>
          <span className={style['reviews-user-name']}>{reviewer_name}</span>
          <ul className={style['reviews-rate-list']}>
            {new Array(reviewer_rating).fill('').map((_, index) => (
              <li className={style['reviews-rate-list-item']} key={index}>
                <svg width="16" height="16">
                  <use href="/goit-test-task/icons.svg#rateing"></use>
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className={style['reviews-list-item-text']}>{comment}</p>
    </li>
  );
};

export default ReviewsListItem;
