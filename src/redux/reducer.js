import { combineReducers } from 'redux';
import adsSliceReducer from './adsSlice';
import favoritesSliceReducer from './favoritesSlice';
import detailsModalSliceReducer from './detailsModalSlice';
import filterSliceReducer from './filterSlice';

export const reducer = combineReducers({
  ads: adsSliceReducer,
  favorites: favoritesSliceReducer,
  detailsModal: detailsModalSliceReducer,
  filter: filterSliceReducer,
});
