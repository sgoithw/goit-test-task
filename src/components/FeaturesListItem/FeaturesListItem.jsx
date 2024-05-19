import style from './FeaturesListItem.module.css';

const FeaturesListItem = ({ feature: { icon, title, text } }) => {
  return (
    <li className={style['features-list-item']}>
      <svg width="64" height="64">
        <use href={process.env.PUBLIC_URL + '/icons.svg#' + icon}></use>
      </svg>
      <h3 className={style['features-list-item-title']}>{title}</h3>
      <p className={style['features-list-item-text']}>{text}</p>
    </li>
  );
};

export default FeaturesListItem;
