import Container from 'components/Container/Container';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles['header']}>
      <Container>
        <nav className={styles['header-nav']}>
          <a className={styles['header-logo']} href="#home">
            <img
              width={50}
              height={50}
              src={process.env.PUBLIC_URL + '/logo192.png'}
              alt="Campers"
            />
          </a>
          <ul className={styles['header-nav-list']}>
            <li className={styles['header-nav-list-item']}>
              <a className={styles['nav-link']} href="#home">
                Home
              </a>
            </li>
            <li className={styles['header-nav-list-item']}>
              <a className={styles['nav-link']} href="#catalog">
                Catalog
              </a>
            </li>
            <li className={styles['header-nav-list-item']}>
              <a className={styles['nav-link']} href="#favorites">
                Favorites
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
