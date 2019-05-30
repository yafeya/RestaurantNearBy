import { get_restaurants } from './RestaurantApi';
import { FETCH_RESTAURANTS, PICK_RESTAURANT, SET_RESPONSE } from './RestaurantConsts';

export const fetchRestaurants = (location, price_section, result_count) => ({
    type: FETCH_RESTAURANTS,
    payload: get_restaurants(location, price_section, result_count)
});

export const pickRestaurant = restaurantIndex => ({
    type: PICK_RESTAURANT,
    payload: restaurantIndex
});

export const setResponse = response => ({
    type: SET_RESPONSE,
    payload: response
});