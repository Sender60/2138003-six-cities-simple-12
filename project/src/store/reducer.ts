import { createReducer } from '@reduxjs/toolkit';
import { cities } from '../const';
import { setActiveCity, setListOffers, setSortOffers } from './action';
import { Offer } from '../types/offer';
import { City } from '../types/city';
import { sorting } from '../const';

type typeState = {
  city: City;
  offers: Offer[];
  select: string;
}

const initialState: typeState = {
  city: cities[0],
  offers: [],
  select: sorting.popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setListOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortOffers, (state, action) => {
      state.select = action.payload;
    });
});
