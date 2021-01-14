import React from 'react';
import MealsNavigator from './navigation/MealsNavigator';
import {createStore, combineReducers} from 'redux';
import mealReducer from './store/reducers/meals';
import {Provider} from 'react-redux'

const rootReducer = combineReducers({
  meals: mealReducer,
});

const store = createStore(rootReducer);

export default function APP() {
  return (
    <Provider store = {store}>
      <MealsNavigator />
    </Provider>
    
  );
}
