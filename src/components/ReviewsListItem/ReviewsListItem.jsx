import style from './ReviewsListItem.module.css';

const ReviewsListItem = ({ review: { name, rate, text } }) => {
  return (
    <li class="reviews-list-item">
      <div class="reviews-user-info">
        <span class="reviews-user-fl">J</span>
        <div class="reviews-user-rate-holder">
          <span class="reviews-user-name">{name}</span>
          <ul class="reviews-rate-list">
            {new Array(rate).fill('').map((_, index) => (
              <li class="reviews-rate-list-item" key={index}>
                <svg width="16" height="16">
                  <use href="/goit-test-task/icons.svg#rateing"></use>
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p class="reviews-list-item-text">{text}</p>
    </li>
  );
};

export default ReviewsListItem;
