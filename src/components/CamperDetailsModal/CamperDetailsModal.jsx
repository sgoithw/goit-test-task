import clsx from 'clsx';
import style from './CamperDetailsModal.module.css';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import BookCamperForm from 'components/BookCamperForm/BookCamperForm';

const CamperDetailsModal = () => {
  return (
    <div className={style['modal-holder']} style={{ display: 'none' }}>
      <div className={style['modal']}>
        <div className={style['modal-camper-header']}>
          <div className={style['modal-camper-header-top']}>
            <h2 className={style['modal-camper-title']}>Mavericks</h2>
            <div className={style['modal-camper-head-actions']}>
              <svg width="32" height="32" className={style['modal-close']}>
                <use href={process.env.PUBLIC_URL + '/icons.svg#close'}></use>
              </svg>
            </div>
          </div>
          <div className={style['modal-camper-sub-header']}>
            <span className={style['modal-camper-sub-header-badge']}>
              <svg width="16" height="16">
                <use href={process.env.PUBLIC_URL + '/icons.svg#rateing'}></use>
              </svg>
              <span className={'text-underline'}>4.2(10 Reviews)</span>
            </span>
            <span className={style['modal-camper-sub-header-badge']}>
              <svg width="16" height="16">
                <use href={process.env.PUBLIC_URL + '/icons.svg#map-pin'}></use>
              </svg>
              Kyiv, Ukraine
            </span>
          </div>
          <span className={style['camper-price']}>€8000.00</span>
        </div>
        <div className={style['modal-camper-gallery']}>
          <ul className={style['modal-camper-gallery-list']}>
            <li className={style['modal-camper-gallery-item']}>
              <img
                className={style['modal-camper-gallery-img']}
                src="https://ftp.goit.study/img/campers-test-task/1-1.webp"
                alt="Mavericks camper"
              />
            </li>
            <li className={style['modal-camper-gallery-item']}>
              <img
                className={style['modal-camper-gallery-img']}
                src="https://ftp.goit.study/img/campers-test-task/1-2.webp"
                alt="Mavericks camper"
              />
            </li>
            <li className={style['modal-camper-gallery-item']}>
              <img
                className={style['modal-camper-gallery-img']}
                src="https://ftp.goit.study/img/campers-test-task/1-3.webp"
                alt="Mavericks camper"
              />
            </li>
          </ul>
        </div>
        <div className={style['modal-camper-description']}>
          <p>
            Embrace simplicity and freedom with the Mavericks panel truck, an
            ideal choice for solo travelers or couples seeking a compact and
            efficient way to explore the open roads. This no-frills yet reliable
            panel truck offers the essentials for a comfortable journey, making
            it the perfect companion for those who value simplicity and
            functionality.
          </p>
        </div>
        <ul className={style['modal-tabs-list']}>
          <li className={clsx(style['modal-tab-nav'], style['active'])}>
            Features
          </li>
          <li className={style['modal-tab-nav']}>Reviews</li>
        </ul>
        <div className={style['modal-details']}>
          <div className={style['modal-tabs']}>
            <div
              id="features"
              style={{ display: 'none' }}
              className={style['modal-tab-content']}
            >
              <ul className={style['modal-camper-feature-list']}>
                <li className={style['camper-feture-item']}>
                  <svg width="20" height="20">
                    <use href="/goit-test-task/icons.svg#users"></use>
                  </svg>
                  2 adults
                </li>
                <li className={style['camper-feture-item']}>
                  <svg width="20" height="20">
                    <use href="/goit-test-task/icons.svg#multiroute"></use>
                  </svg>
                  Automatic
                </li>
                <li className={style['camper-feture-item']}>
                  <svg width="20" height="20">
                    <use href="/goit-test-task/icons.svg#gass"></use>
                  </svg>
                  Petrol
                </li>
                <li className={style['camper-feture-item']}>
                  <svg width="20" height="20">
                    <use href="/goit-test-task/icons.svg#fork-knife"></use>
                  </svg>
                  Kitchen
                </li>
                <li className={style['camper-feture-item']}>
                  <svg width="20" height="20">
                    <use href="/goit-test-task/icons.svg#bed"></use>
                  </svg>
                  1 bed
                </li>
                <li className={style['camper-feture-item']}>
                  <svg width="20" height="20">
                    <use href="/goit-test-task/icons.svg#wind"></use>
                  </svg>
                  AC
                </li>

                <li className={style['camper-feture-item']}>
                  <svg width="20" height="20">
                    <use href="/goit-test-task/icons.svg#gass"></use>
                  </svg>
                  Petrol
                </li>
                <li className={style['camper-feture-item']}>
                  <svg width="20" height="20">
                    <use href="/goit-test-task/icons.svg#fork-knife"></use>
                  </svg>
                  Kitchen
                </li>
                <li className={style['camper-feture-item']}>
                  <svg width="20" height="20">
                    <use href="/goit-test-task/icons.svg#bed"></use>
                  </svg>
                  1 bed
                </li>
                <li className={style['camper-feture-item']}>
                  <svg width="20" height="20">
                    <use href="/goit-test-task/icons.svg#wind"></use>
                  </svg>
                  AC
                </li>
              </ul>
              <div className={style['camper-vehicle-details']}>
                <h3 className={style['camper-vehicle-details-title']}>
                  Vehicle details
                </h3>
                <ul className={style['camper-vehicle-details-list']}>
                  <li className={style['camper-vehicle-details-item']}>
                    <span
                      className={style['camper-vehicle-details-item-title']}
                    >
                      Form
                    </span>
                    <span
                      className={style['camper-vehicle-details-item-value']}
                    >
                      Panel truck
                    </span>
                  </li>
                  <li className={style['camper-vehicle-details-item']}>
                    <span
                      className={style['camper-vehicle-details-item-title']}
                    >
                      Length
                    </span>
                    <span
                      className={style['camper-vehicle-details-item-value']}
                    >
                      5.4 m
                    </span>
                  </li>
                  <li className={style['camper-vehicle-details-item']}>
                    <span
                      className={style['camper-vehicle-details-item-title']}
                    >
                      Width
                    </span>
                    <span
                      className={style['camper-vehicle-details-item-value']}
                    >
                      2.01 m
                    </span>
                  </li>
                  <li className={style['camper-vehicle-details-item']}>
                    <span
                      className={style['camper-vehicle-details-item-title']}
                    >
                      Height
                    </span>
                    <span
                      className={style['camper-vehicle-details-item-value']}
                    >
                      2.05 m
                    </span>
                  </li>
                  <li className={style['camper-vehicle-details-item']}>
                    <span
                      className={style['camper-vehicle-details-item-title']}
                    >
                      Tank
                    </span>
                    <span
                      className={style['camper-vehicle-details-item-value']}
                    >
                      132 I
                    </span>
                  </li>
                  <li className={style['camper-vehicle-details-item']}>
                    <span
                      className={style['camper-vehicle-details-item-title']}
                    >
                      Consumption
                    </span>
                    <span
                      className={style['camper-vehicle-details-item-value']}
                    >
                      12.4l/100km
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div id="reviews" className={style['modal-tab-content']}>
              <ReviewsList />
            </div>
          </div>
          <div className={style['modal-book-form-container']}>
            <h2 className={style['modal-title']}>Book your campervan now</h2>
            <p className={style['modal-sub-title']}>
              Stay connected! We are always ready to help you.
            </p>
            <BookCamperForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamperDetailsModal;
