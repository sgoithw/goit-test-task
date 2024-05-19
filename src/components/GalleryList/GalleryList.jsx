import GalleryListItem from 'components/GalleryListItem/GalleryListItem';
import style from './GalleryList.module.css';

const GalleryList = () => {
  const images = [
    {
      image: process.env.PUBLIC_URL + '/images/gallery/img-1.webp',
      alt: 'Camper 1',
    },
    {
      image: process.env.PUBLIC_URL + '/images/gallery/img-2.webp',
      alt: 'Camper 2',
    },
    {
      image: process.env.PUBLIC_URL + '/images/gallery/img-3.webp',
      alt: 'Camper 3',
    },
    {
      image: process.env.PUBLIC_URL + '/images/gallery/img-4.webp',
      alt: 'Camper 4',
    },
    {
      image: process.env.PUBLIC_URL + '/images/gallery/img-5.webp',
      alt: 'Camper 5',
    },
    {
      image: process.env.PUBLIC_URL + '/images/gallery/img-6.webp',
      alt: 'Camper 6',
    },
    {
      image: process.env.PUBLIC_URL + '/images/gallery/img-7.webp',
      alt: 'Camper 7',
    },
    {
      image: process.env.PUBLIC_URL + '/images/gallery/img-8.webp',
      alt: 'Camper 8',
    },
    {
      image: process.env.PUBLIC_URL + '/images/gallery/img-9.webp',
      alt: 'Camper 9',
    },
    {
      image: process.env.PUBLIC_URL + '/images/gallery/img-10.webp',
      alt: 'Camper 10',
    },
    {
      image: process.env.PUBLIC_URL + '/images/gallery/img-11.webp',
      alt: 'Camper 11',
    },
    {
      image: process.env.PUBLIC_URL + '/images/gallery/img-12.webp',
      alt: 'Camper 12',
    },
    {
      image: process.env.PUBLIC_URL + '/images/gallery/img-13.webp',
      alt: 'Camper 13',
    },
    {
      image: process.env.PUBLIC_URL + '/images/gallery/img-14.webp',
      alt: 'Camper 14',
    },
    {
      image: process.env.PUBLIC_URL + '/images/gallery/img-15.webp',
      alt: 'Camper 15',
    },
  ];

  return (
    <ul className={style['gallery-list']}>
      {images.map(({ image, alt }) => (
        <GalleryListItem image={image} alt={alt} />
      ))}
    </ul>
  );
};

export default GalleryList;
