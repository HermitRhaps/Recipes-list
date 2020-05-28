// import { initialState } from "./initialState";
// import { CREATE_RECIPE } from "./types/types";

export const recipeReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_RECIPE":
      return [...state, { text: action.text }];
    default:
      return state;
  }
};
