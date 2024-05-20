import Container from 'components/Container/Container';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles['header']}>
      <Container>
        <nav className={styles['header-nav']}>
          <NavLink to="/">
            <span className={styles['header-logo']}>
              <img
                width={50}
                height={50}
                src={process.env.PUBLIC_URL + '/logo192.png'}
                alt="Campers"
              />
            </span>
          </NavLink>
          <ul className={styles['header-nav-list']}>
            <li className={styles['header-nav-list-item']}>
              <NavLink to="/">
                <span className={styles['nav-link']}>Home</span>
              </NavLink>
            </li>
            <li className={styles['header-nav-list-item']}>
              <NavLink to="/catalog">
                <span className={styles['nav-link']}>Catalog</span>
              </NavLink>
            </li>
            <li className={styles['header-nav-list-item']}>
              <NavLink to="/favorites">
                <span className={styles['nav-link']}>Favorites</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
