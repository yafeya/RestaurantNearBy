import { get_restaurants } from './RestaurantApi';
import { FETCH_RESTAURANTS } from './RestaurantConsts';

export const fetchRestaurants = (location, price_section, result_count) => ({
    type: FETCH_RESTAURANTS,
    payload: get_restaurants(location, price_section, result_count)
});