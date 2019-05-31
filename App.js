import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import restaurantsReducer from './RestaurantReducers';
import AppNavigator from './AppNavigator';
import { createAppContainer } from 'react-navigation';
import promise from 'redux-promise-middleware';

export default class App extends React.Component {
  render() {
    const middleware = [promise];
    const store = createStore(restaurantsReducer, applyMiddleware(...middleware));
    const AppContainer = createAppContainer(AppNavigator);
    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    );
  }
}
