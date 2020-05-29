import { initialState } from "./initialState";
import update from "immutability-helper";
export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_RECIPE":
      return {
        ...state,
        recipes: [
          ...state.recipes,
          {
            text: action.text,
            image: action.image,
            group: action.group,
            description: action.description,
          },
        ],
      };
    case "EDIT_RECIPE":
      return update(state, {
        recipes: {
          [action.id]: {
            text: { $set: action.newText },
            image: { $set: action.newImage },
            group: { $set: action.newGroup },
            description: { $set: action.newDescription },
          },
        },
      });
    default:
      return state;
  }
};
