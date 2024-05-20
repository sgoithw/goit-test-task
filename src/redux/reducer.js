import { combineReducers } from 'redux';
import adsSliceReducer from './adsSlice';
import favoritesSliceReducer from './favoritesSlice';
import detailsModalSliceReducer from './detailsModalSlice';
import filterSliceReducer from './filterSlice';

import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistedFavoritesReduces = persistReducer(
  {
    key: 'favorites',
    storage,
  },
  favoritesSliceReducer
);

export const reducer = combineReducers({
  ads: adsSliceReducer,
  favorites: persistedFavoritesReduces,
  detailsModal: detailsModalSliceReducer,
  filter: filterSliceReducer,
});
