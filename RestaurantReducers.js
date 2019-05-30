import { combineReducers } from 'redux';
import {
    FETCH_RESTAURANTS_PENDING,
    FETCH_RESTAURANTS_FULFILLED,
    FETCH_RESTAURANTS_REJECTED,
    PICK_RESTAURANT
} from './RestaurantConsts';

const INITIAL_STATE = {
    selected: {},
    candidates: [],
    dataFetched: false,
    isFetching: false,
    error: false,
    response: {}
};

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
                // candidates: action.payload,
                response: action.payload,
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
        case PICK_RESTAURANT:
            // Pulls current and candidates out of previous state
            // We do not want to alter state directly in case
            // another action is altering it at the same time
            const {
                selected,
                candidates,
            } = state;

            // Pull friend out of friends.possible
            const pickedRestaurant = possible.splice(action.payload, 1)[0];
            // And put friend in friends.current
            selected = pickedRestaurant;

            // Finally, update our redux state
            const newState = { selected, candidates };
            result = newState;
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
