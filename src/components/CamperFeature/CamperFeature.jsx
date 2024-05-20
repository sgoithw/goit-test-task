import style from './CamperFeature.module.css';

const CamperFeature = ({ slug, value }) => {
  const features = {
    airConditioner: {
      title: 'Air conditioner',
      icon: process.env.PUBLIC_URL + `/icons.svg#airconditioner`,
    },

    bathroom: {
      title: 'Bathroom',
      icon: process.env.PUBLIC_URL + `/icons.svg#shower`,
    },

    kitchen: {
      title: 'Kitchen',
      icon: process.env.PUBLIC_URL + `/icons.svg#fork-knife`,
    },

    beds: {
      title: 'Beds',
      icon: process.env.PUBLIC_URL + `/icons.svg#beds`,
    },

    TV: {
      title: 'TV',
      icon: process.env.PUBLIC_URL + `/icons.svg#tv`,
    },

    CD: {
      title: 'CD',
      icon: process.env.PUBLIC_URL + `/icons.svg#cd`,
    },

    radio: {
      title: 'Radio',
      icon: process.env.PUBLIC_URL + `/icons.svg#radio`,
    },

    shower: {
      title: 'Shower',
      icon: process.env.PUBLIC_URL + `/icons.svg#shower`,
    },

    toilet: {
      title: 'Toilet',
      icon: process.env.PUBLIC_URL + `/icons.svg#toilet-paper`,
    },

    freezer: {
      title: 'Freezer',
      icon: process.env.PUBLIC_URL + `/icons.svg#freezer`,
    },

    hob: {
      title: 'Hob',
      icon: process.env.PUBLIC_URL + `/icons.svg#hob`,
    },

    microwave: {
      title: 'Microwave',
      icon: process.env.PUBLIC_URL + `/icons.svg#microwave`,
    },

    gas: {
      title: 'Gas',
      icon: process.env.PUBLIC_URL + `/icons.svg#gas`,
    },

    water: {
      title: 'Water',
      icon: process.env.PUBLIC_URL + `/icons.svg#water`,
    },
  };

  const feature = features[slug];

  return (
    <li className={style['camper-feture-item']}>
      <svg width="20" height="20">
        <use href={feature.icon}></use>
      </svg>
      {value} {feature.title}
    </li>
  );
};

export default CamperFeature;
