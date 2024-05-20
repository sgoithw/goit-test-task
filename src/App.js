import { lazy, useEffect } from 'react';

import SharedLayout from 'layout/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAdverts } from './redux/operations';

const Home = lazy(() => import('pages/Home/Home.jsx'));
const Favorites = lazy(() => import('pages/Favorites/Faovrites.jsx'));
const Catalog = lazy(() => import('pages/Catalog/Catalog.jsx'));

function App() {
  const dipatch = useDispatch();
  useEffect(() => {
    dipatch(fetchAdverts());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route element={<Home />} index />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
