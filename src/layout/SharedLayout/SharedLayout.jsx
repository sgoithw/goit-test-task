import { Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => (
  <>
    <Header />
    <main className={styles['main']}>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
  </>
);

export default SharedLayout;
