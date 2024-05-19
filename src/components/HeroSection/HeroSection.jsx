import Container from 'components/Container/Container';
import style from './HeroSection.module.css';
import Button from 'components/Button/Button';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className={style['hero-section']}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/hero-bg.webp'})`,
      }}
    >
      <Container>
        <div className={style['hero-content']}>
          <h1 className={style['hero-title']}>
            Rent a camper <br /> hit the road!
          </h1>
          <p className={style['hero-sub-title']}>
            Choose the perfect camper for your next adventure from the largest
            selection of campervans in the world.
          </p>
          <Button> View catalog</Button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
