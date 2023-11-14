import { types } from "../actions/actionTypes";
const initialState = {
    allRecipe: [],
}


const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.ALL_RECIPES:
            return {
                ...state,
                allRecipe: payload
            }
            break;
    
        default:
            break;
    }
}

export default reducer;