import FeaturesListItem from 'components/FeaturesListItem/FeaturesListItem';
import styles from './FeaturesList.module.css';

const FeaturesList = () => {
  const features = [
    {
      icon: 'van',
      title: 'Wide choice',
      text: 'Choose from over 1000 campervans',
    },
    {
      icon: 'map-pin',
      title: 'Location',
      text: 'Convenient locations in 105 countries',
    },
    {
      icon: 'rateing',
      title: 'Safety',
      text: 'Your safety is our top priority',
    },
    {
      icon: 'users',
      title: 'Support',
      text: '24/7 customer support',
    },
  ];

  return (
    <ul className={styles['features-list']}>
      {features.map((feature, index) => (
        <FeaturesListItem key={index} feature={feature} />
      ))}
    </ul>
  );
};

export default FeaturesList;
