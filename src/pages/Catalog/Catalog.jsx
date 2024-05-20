import Section from 'components/Section/Section';
import style from './Catalog.module.css';
import VanFilters from 'components/VanFilters/VanFilters';
import CampersList from 'components/CampersList/CampersList';
import Button from 'components/Button/Button';
import CamperDetailsModal from 'components/CamperDetailsModal/CamperDetailsModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilterShowFirst,
  selectFilteredAdsCount,
} from './../../redux/selectors';
import { setShowFirst } from './../../redux/filterSlice';

const Catalog = () => {
  const dispatch = useDispatch();
  const foundCount = useSelector(selectFilteredAdsCount);
  const showFirst = useSelector(selectFilterShowFirst);

  const handleLoadMore = () => {
    dispatch(setShowFirst(showFirst + 4));
  };

  return (
    <>
      <Section
        id="catalog"
        containerClassName={style['catalog-section-container']}
      >
        <div className="sidebar">
          <VanFilters />
        </div>
        <div className={style['catalog']}>
          <CampersList />
          {foundCount > showFirst && (
            <Button
              outline={true}
              onClick={handleLoadMore}
              id="load-more"
              className={style['load-more']}
            >
              Load more
            </Button>
          )}
        </div>
      </Section>
      <CamperDetailsModal />
    </>
  );
};

export default Catalog;
