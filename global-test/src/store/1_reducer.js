import { createAction } from '../utils/createAction';

// reducer
export const ingredientReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_INGREDIENTS':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 100000),
                    name: action.payload.name,
                    price: action.payload.price,
                },
            ];
        case 'REMOVE_List':
            return state.filter((ingredient) => ingredient.id !== action.payload.id);
        default:
            return state;
    }
};

export const ADD_INGREDIENTS = createAction('ADD_INGREDIENTS');
export const REMOVE_List = createAction('REMOVE_List');
