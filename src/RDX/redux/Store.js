import { legacy_createStore } from "redux";
const initialState = {
  compteur: 0,
};
export const CompteurReducer = (state = initialState, action) => {
switch (action.type) { 
    case "increment":{
        return {...state,compteur:state.compteur+action.payload};

    }
    case "decrement": {
                return {...state,compteur:state.compteur-action.payload};
    }
    default:
        return state;

}};
export const store = legacy_createStore(CompteurReducer)