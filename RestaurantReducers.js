import { combineReducers } from 'redux';
import {
    FETCH_RESTAURANTS_PENDING,
    FETCH_RESTAURANTS_FULFILLED,
    FETCH_RESTAURANTS_REJECTED
} from './RestaurantConsts';
import { Location, Restaurant } from './models';


const INITIAL_STATE = {
    candidates: [],
    dataFetched: false,
    isFetching: false,
    error: false,
    response: {}
};

function toResaurants(jArray) {
    let restaurants = [];
    try {
        for (let index = 0; jArray.length; index++) {
            let id = index + 1;
            let j_item = jArray[index];
            let location = new Location(j_item.location.latitude, j_item.location.longitude);
            let restaurant = new Restaurant();
            restaurant.id = id;
            restaurant.address = j_item.address            ;
            restaurant.city = j_item.city;
            restaurant.distance = j_item.distance;
            restaurant.location = location;
            restaurant.name = j_item.name;
            restaurant.price = j_item.price;
            restaurant.province = j_item.province;
            restaurant.rating = j_item.rating;
            restaurant.time = j_item.time;
            restaurants.push(restaurant);
        }
     }
    catch (error) {
        console.log(error);
    }
    return restaurants;
}

const restaurantsReducer = (state = INITIAL_STATE, action) => {
    let result = {};
    switch (action.type) {
        case FETCH_RESTAURANTS_PENDING:
            result = {
                ...state,
                candidates: [],
                isFetching: true
            };
            break;
        case FETCH_RESTAURANTS_FULFILLED:
            result = {
                ...state,
                candidates: toResaurants(action.payload),
                isFetching: false,
                dataFetched: true
            };
            console.log('Fetched Data Successfully');
            break;
        case FETCH_RESTAURANTS_REJECTED:
            result = {
                ...state,
                isFetching: false,
                error: true
            };
            console.log('Error Happened during fetching');
            break;
        default:
            result = state;
            break;
    }
    return result;
};

export default combineReducers({
	restaurants: restaurantsReducer,
});
