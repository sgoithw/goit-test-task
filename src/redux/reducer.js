import { combineReducers } from 'redux';
import adsSliceReducer from './adsSlice';
import favoritesSliceReducer from './favoritesSlice';
import detailsModalSliceReducer from './detailsModalSlice';

export const reducer = combineReducers({
  ads: adsSliceReducer,
  favorites: favoritesSliceReducer,
  detailsModal: detailsModalSliceReducer,
});
