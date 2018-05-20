
import { SET_NAME, SET_AGE } from "../actions/userActions";

const initialState = { name: 'Mat', age: 36 };

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME:
            state = {
                ...state,
                name: action.payload
            };
            break;
        case SET_AGE:
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
}
