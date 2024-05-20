import Container from 'components/Container/Container';
import style from './HeroSection.module.css';
import Button from 'components/Button/Button';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className={style['hero-section']}
      style={{
        background: `linear-gradient(90deg, rgb(255 255 255 / 59%), transparent,transparent,transparent), linear-gradient(270deg, rgb(255 255 255 / 59%), transparent,transparent,transparent), url('${process.env.PUBLIC_URL}/hero-bg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
          <NavLink to="/catalog">
            <Button> View catalog</Button>
          </NavLink>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
