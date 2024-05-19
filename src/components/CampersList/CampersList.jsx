import CampersListItem from 'components/CampersListItem/CampersListItem';
import style from './CampersList.module.css';

const CampersList = () => {
  return (
    <ul className={style['campers-list']}>
      <CampersListItem />
      <CampersListItem />
      <CampersListItem />
      <CampersListItem />
      <CampersListItem />
      <CampersListItem />
      <CampersListItem />
    </ul>
  );
};

export default CampersList;
