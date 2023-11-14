import { types } from "./actionTypes";
import axios from "axios"

export const getRecipe = () => {
    return async dispatch => {

        try {
            const response = (await axios.get("http://localhost:3001/recipes")).data;
            dispatch({
                    type: types.ALL_RECIPES,
                    payload: response
                })
        } catch (error) {

        }
    }
}