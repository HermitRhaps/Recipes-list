import { initialState } from "./initialState";
export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_RECIPE":
      return [...state, { text: action.text }];
    default:
      return state;
  }
};
