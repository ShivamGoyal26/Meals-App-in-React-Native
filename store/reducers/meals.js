// Here we will write the logic to mark a meal favorite and for managing our filters 
import { MEALS } from '../../data/dummy-data';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
    return state;
}

export default mealsReducer;