import styles from './OurFeaturesSection.module.css';

import FeaturesList from 'components/FeaturesList/FeaturesList';
import Section from '../Section/Section';

const OurFeatureSection = () => {
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

export default OurFeatureSection;
