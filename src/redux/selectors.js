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

//Filter
export const selectFilter = state => state.filter;
export const selectFilterShowFirst = state => state.filter.showFirst;

export const selectFavoriteAds = createSelector(
  [selectAdverts, selectFavorites],
  (ads, favorites) => ads.filter(ad => favorites.includes(ad._id))
);

export const selectFilteredAds = createSelector(
  [selectAdverts, selectFilter],
  (ads, filter) => {
    const {
      filter: { location, details, transmission, vanType },
    } = filter;

    let filteredAds = ads;

    if (location.length > 0) {
      filteredAds = filteredAds.filter(
        ad => ad.location.indexOf(location) >= 0
      );
    }

    if (vanType.length > 0) {
      filteredAds = filteredAds.filter(ad => ad.form === vanType);
    }

    if (details.length > 0) {
      filteredAds = filteredAds.filter(ad => {
        return details.every(detail =>
          Object.keys(ad.details)
            .filter(key => ad.details[key])
            .includes(detail)
        );
      });
    }

    if (transmission.length > 0) {
      filteredAds = filteredAds.filter(ad => ad.transmission === transmission);
    }

    return filteredAds;
  }
);

export const selectFilteredPaginatedAds = createSelector(
  [selectFilteredAds, selectFilterShowFirst],
  (ads, showFirst) => ads.slice(0, showFirst)
);

export const selectFilteredAdsCount = createSelector(
  [selectFilteredAds],
  ads => ads.length
);
