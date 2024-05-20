import Section from 'components/Section/Section';
import style from './Catalog.module.css';
import VanFilter from 'components/VanFilter/VanFIlter';
import CampersList from 'components/CampersList/CampersList';
import Button from 'components/Button/Button';
import CamperDetailsModal from 'components/CamperDetailsModal/CamperDetailsModal';

const Catalog = () => {
  return (
    <>
      <Section
        id="catalog"
        containerClassName={style['catalog-section-container']}
      >
        <div className="sidebar">
          <VanFilter />
        </div>
        <div className={style['catalog']}>
          <CampersList />
          <Button id="load-more" className={style['load-more']}>
            Load more
          </Button>
        </div>
      </Section>
      <CamperDetailsModal />
    </>
  );
};

export default Catalog;
