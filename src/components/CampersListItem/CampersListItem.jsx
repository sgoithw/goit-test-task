import Button from 'components/Button/Button';
import style from './CamperListItem.module.css';

const CampersListItem = camper => {
  return (
    <li className={style['camper']}>
      <img
        className={style['camper-image']}
        src="https://ftp.goit.study/img/campers-test-task/1-1.webp"
        alt="Mavericks camper"
      />
      <div className={style['camper-details']}>
        <div className={style['camper-header']}>
          <div className={style['camper-header-top']}>
            <h2 className={style['camper-title']}>Mavericks</h2>
            <div className={style['camper-head-actions']}>
              <span className={style['camper-price']}>€8000.00</span>
              <svg
                width="24"
                height="24"
                className={style['camper-add-favorites']}
              >
                <use href={process.env.PUBLIC_URL + '/icons.svg#heart'}></use>
              </svg>
            </div>
          </div>
          <div className={style['camper-sub-header']}>
            <span className={style['camper-sub-header-badge']}>
              <svg width="16" height="16">
                <use href={process.env.PUBLIC_URL + '/icons.svg#rateing'}></use>
              </svg>
              <span className={style['text-underline']}>4.2(10 Reviews)</span>
            </span>
            <span className={style['camper-sub-header-badge']}>
              <svg width="16" height="16">
                <use href={process.env.PUBLIC_URL + '/icons.svg#map-pin'}></use>
              </svg>
              Kyiv, Ukraine
            </span>
          </div>
        </div>
        <div className={style['camper-description']}>
          <p>
            Embrace simplicity and freedom with the Mavericks panel truck, an...
          </p>
        </div>
        <ul className={style['camper-feature-list']}>
          <li className={style['camper-feture-item']}>
            <svg width="20" height="20">
              <use href={process.env.PUBLIC_URL + '/icons.svg#users'}></use>
            </svg>
            2 adults
          </li>
          <li className={style['camper-feture-item']}>
            <svg width="20" height="20">
              <use
                href={process.env.PUBLIC_URL + '/icons.svg#multiroute'}
              ></use>
            </svg>
            Automatic
          </li>
          <li className={style['camper-feture-item']}>
            <svg width="20" height="20">
              <use href={process.env.PUBLIC_URL + '/icons.svg#gass'}></use>
            </svg>
            Petrol
          </li>
          <li className={style['camper-feture-item']}>
            <svg width="20" height="20">
              <use
                href={process.env.PUBLIC_URL + '/icons.svg#fork-knife'}
              ></use>
            </svg>
            Kitchen
          </li>
          <li className={style['camper-feture-item']}>
            <svg width="20" height="20">
              <use href={process.env.PUBLIC_URL + '/icons.svg#bed'}></use>
            </svg>
            1 bed
          </li>
          <li className={style['camper-feture-item']}>
            <svg width="20" height="20">
              <use href={process.env.PUBLIC_URL + '/icons.svg#wind'}></use>
            </svg>
            AC
          </li>
        </ul>
        <Button className="camper-show-more">Show more</Button>
      </div>
    </li>
  );
};

export default CampersListItem;
