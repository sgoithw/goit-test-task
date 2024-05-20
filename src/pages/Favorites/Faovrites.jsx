import Section from 'components/Section/Section';
import CampersList from 'components/CampersList/CampersList';
import CamperDetailsModal from 'components/CamperDetailsModal/CamperDetailsModal';

const Favorites = () => {
  return (
    <>
      <Section id="favorites" className="favorites-section">
        <div className="catalog">
          <CampersList favorites={true} />
        </div>
      </Section>
      <CamperDetailsModal />
    </>
  );
};

export default Favorites;
