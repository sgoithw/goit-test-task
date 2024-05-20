import clsx from 'clsx';
import style from './CamperDetailsModal.module.css';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import BookCamperForm from 'components/BookCamperForm/BookCamperForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAdvertById,
  selectDetailsModalId,
  selectIsDetailsModalOpen,
} from './../../redux/selectors';
import { closeDetailsModal } from './../../redux/detailsModalSlice';
import { useEffect, useState } from 'react';
import CamperFeature from 'components/CamperFeature/CamperFeature';

const CamperDetailsModal = () => {
  const isOpen = useSelector(selectIsDetailsModalOpen);
  const id = useSelector(selectDetailsModalId);
  const ad = useSelector(selectAdvertById(id));
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('features');

  const handleEsc = e => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  useEffect(() => {
    setActiveTab('features');
  }, [id]);

  const handleClose = () => {
    dispatch(closeDetailsModal());
  };

  const handleModalClick = e => {
    if (e.target.classList.contains(style['modal-holder'])) {
      handleClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={style['modal-holder']} onClick={handleModalClick}>
      <div className={style['modal']}>
        <div className={style['modal-camper-header']}>
          <div className={style['modal-camper-header-top']}>
            <h2 className={style['modal-camper-title']}>{ad.name}</h2>
            <div className={style['modal-camper-head-actions']}>
              <svg
                onClick={handleClose}
                width="32"
                height="32"
                className={style['modal-close']}
              >
                <use href={process.env.PUBLIC_URL + '/icons.svg#close'}></use>
              </svg>
            </div>
          </div>
          <div className={style['modal-camper-sub-header']}>
            <span className={style['modal-camper-sub-header-badge']}>
              <svg width="16" height="16">
                <use href={process.env.PUBLIC_URL + '/icons.svg#rateing'}></use>
              </svg>
              <span className={'text-underline'}>
                {ad.rating}({ad.reviews.length} Reviews)
              </span>
            </span>
            <span className={style['modal-camper-sub-header-badge']}>
              <svg width="16" height="16">
                <use href={process.env.PUBLIC_URL + '/icons.svg#map-pin'}></use>
              </svg>
              {ad.location}
            </span>
          </div>
          <span className={style['camper-price']}>€{ad.price.toFixed(2)}</span>
        </div>
        <div className={style['modal-camper-gallery']}>
          <ul className={style['modal-camper-gallery-list']}>
            {ad.gallery.slice(0, 3).map(image => (
              <li className={style['modal-camper-gallery-item']}>
                <img
                  className={style['modal-camper-gallery-img']}
                  src={image}
                  alt={ad.name}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={style['modal-camper-description']}>
          <p>{ad.description}</p>
        </div>
        <ul className={style['modal-tabs-list']}>
          <li
            className={clsx(
              style['modal-tab-nav'],
              activeTab == 'features' && style['active']
            )}
            onClick={() => setActiveTab('features')}
          >
            Features
          </li>
          <li
            className={clsx(
              style['modal-tab-nav'],
              activeTab == 'reviews' && style['active']
            )}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </li>
        </ul>
        <div className={style['modal-details']}>
          <div className={style['modal-tabs']}>
            <div
              id="features"
              className={clsx(
                style['modal-tab-content'],
                activeTab == 'features' && style['active']
              )}
            >
              <ul className={style['modal-camper-feature-list']}>
                {Object.keys(ad.details)
                  .filter(key => ad.details[key])
                  .map(key => (
                    <CamperFeature slug={key} value={ad.details[key]} />
                  ))}
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
                      {ad.form}
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
                      {ad.length}
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
                      {ad.width}
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
                      {ad.height}
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
                      {ad.tank}
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
                      {ad.consumption}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              id="reviews"
              className={clsx(
                style['modal-tab-content'],
                activeTab == 'reviews' && style['active']
              )}
            >
              <ReviewsList reviews={ad.reviews} />
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
