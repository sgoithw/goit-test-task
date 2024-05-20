import { createSelector } from '@reduxjs/toolkit';

//Ads
export const selectAdverts = state => state.ads.ads;
export const selectAdvertsLoading = state => state.ads.isLoading;
export const selectAdvertsError = state => state.ads.error;
export const selectAdvertById = id => state =>
  state.ads.ads.find(ad => ad._id === id);

//Favorites
export const selectFavorites = state => state.favorites.ids;
export const selectFavoritesCount = state => state.favorites.ids.length;
export const selectIsFavorite = id => state => state.favorites.ids.includes(id);

//Details Modal
export const selectIsDetailsModalOpen = state => state.detailsModal.isOpen;
export const selectDetailsModalId = state => state.detailsModal.id;

export const selectFavoriteAds = createSelector(
  [selectAdverts, selectFavorites],
  (ads, favorites) => ads.filter(ad => favorites.includes(ad._id))
);
