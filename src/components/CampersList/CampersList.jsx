import CampersListItem from 'components/CampersListItem/CampersListItem';
import style from './CampersList.module.css';
import { useSelector } from 'react-redux';
import {
  selectAdverts,
  selectAdvertsError,
  selectAdvertsLoading,
  selectFavoriteAds,
} from './../../redux/selectors';
import Loader from 'components/Loader/Loader';

const CampersList = ({ favorites = false }) => {
  const ads = useSelector(selectAdverts);
  const favoriteAds = useSelector(selectFavoriteAds);
  const isLoading = useSelector(selectAdvertsLoading);
  const error = useSelector(selectAdvertsError);
  const renderAds = favorites ? favoriteAds : ads;
  return (
    <ul className={style['campers-list']}>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      {renderAds.map(ad => (
        <CampersListItem key={ad._id} {...ad} />
      ))}
      {renderAds.length == 0 && <p>No campers found</p>}
    </ul>
  );
};

export default CampersList;
