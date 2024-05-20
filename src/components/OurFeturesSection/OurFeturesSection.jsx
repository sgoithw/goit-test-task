import styles from './OurFeturesSection.module.css';

import FeaturesList from 'components/FeaturesList/FeaturesList';
import Section from '../Section/Section';

const OurFeturesSection = () => {
  return (
    <Section
      id="our-features"
      className={styles['our-features']}
      title="Our features"
    >
      <FeaturesList />
    </Section>
  );
};

export default OurFeturesSection;
