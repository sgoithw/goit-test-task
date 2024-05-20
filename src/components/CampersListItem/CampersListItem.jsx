import Button from 'components/Button/Button';
import style from './CamperListItem.module.css';
import { selectIsFavorite } from './../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from './../../redux/favoritesSlice';
import { showDetailsModal } from './../../redux/detailsModalSlice';

const CampersListItem = ({
  _id,
  name,
  price,
  rating,
  reviews,
  location,
  description,
  gallery,
  details,
}) => {
  const dispatch = useDispatch();
  const previewImage =
    gallery[0] ?? 'https://ftp.goit.study/img/campers-test-task/1-1.webp';
  const isFavorite = useSelector(selectIsFavorite(_id));

  const handleFavoriteClick = () => {
    isFavorite ? dispatch(removeFavorite(_id)) : dispatch(addFavorite(_id));
  };

  const handleShowDetails = () => {
    dispatch(showDetailsModal(_id));
  };

  return (
    <li className={style['camper']}>
      <img
        className={style['camper-image']}
        src={previewImage}
        alt="Mavericks camper"
      />
      <div className={style['camper-details']}>
        <div className={style['camper-header']}>
          <div className={style['camper-header-top']}>
            <h2 className={style['camper-title']}>{name}</h2>
            <div className={style['camper-head-actions']}>
              <span className={style['camper-price']}>€{price.toFixed(2)}</span>
              <svg
                onClick={handleFavoriteClick}
                width="24"
                height="24"
                className={style['camper-add-favorites']}
              >
                <use
                  href={
                    process.env.PUBLIC_URL +
                    '/icons.svg#' +
                    (isFavorite ? 'heart-filled' : 'heart')
                  }
                ></use>
              </svg>
            </div>
          </div>
          <div className={style['camper-sub-header']}>
            <span className={style['camper-sub-header-badge']}>
              <svg width="16" height="16">
                <use href={process.env.PUBLIC_URL + '/icons.svg#rateing'}></use>
              </svg>
              <span className={style['text-underline']}>
                {rating}({reviews.length} Reviews)
              </span>
            </span>
            <span className={style['camper-sub-header-badge']}>
              <svg width="16" height="16">
                <use href={process.env.PUBLIC_URL + '/icons.svg#map-pin'}></use>
              </svg>
              {location}
            </span>
          </div>
        </div>
        <div className={style['camper-description']}>
          <p>{description}</p>
        </div>
        <ul className={style['camper-feature-list']}>
          {Object.keys(details).map(key => (
            <li key={key} className={style['camper-feture-item']}>
              <svg width="20" height="20">
                <use
                  href={
                    process.env.PUBLIC_URL + `/icons.svg#${key.toLowerCase()}`
                  }
                ></use>
              </svg>
              {details[key]} {key}
            </li>
          ))}
        </ul>
        <Button className="camper-show-more" onClick={handleShowDetails}>
          Show more
        </Button>
      </div>
    </li>
  );
};

export default CampersListItem;
