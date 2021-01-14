import React from 'react';
import MealsNavigator from './navigation/MealsNavigator';
import {createStore, combineReducers} from 'redux';
import mealReducer from './store/reducers/meals';

const rootReducer = combineReducers();

const store = createStore();

export default function APP() {
  return (
    <MealsNavigator />
  );
}
