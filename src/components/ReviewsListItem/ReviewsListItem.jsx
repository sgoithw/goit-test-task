import style from './ReviewsListItem.module.css';

const ReviewsListItem = ({
  review: { name, rate, text },
  horizontal = false,
}) => {
  console.log(horizontal);
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
          {name.slice(0, 1).toUpperCase()}
        </span>
        <div className={style['reviews-user-rate-holder']}>
          <span className={style['reviews-user-name']}>{name}</span>
          <ul className={style['reviews-rate-list']}>
            {new Array(rate).fill('').map((_, index) => (
              <li className={style['reviews-rate-list-item']} key={index}>
                <svg width="16" height="16">
                  <use href="/goit-test-task/icons.svg#rateing"></use>
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className={style['reviews-list-item-text']}>{text}</p>
    </li>
  );
};

export default ReviewsListItem;
