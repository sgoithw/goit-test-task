import style from './GalleryListItem.module.css';

const GalleryListItem = ({ image, alt }) => {
  return (
    <li className={style['gallery-list-item']}>
      <img className={style['gallery-list-item-img']} src={image} alt={alt} />
    </li>
  );
};

export default GalleryListItem;
