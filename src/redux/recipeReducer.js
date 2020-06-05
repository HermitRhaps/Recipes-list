import { initialState } from "./initialState";
import update from "immutability-helper";
export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_RECIPES":
      return update(state, { $merge: { recipes: action.recipe } });
    case "CREATE_RECIPE":
      return update(state, {
        recipes: {
          $push: [
            {
              text: action.text,
              image: action.image,
              group: action.group,
              description: action.description,
            },
          ],
        },
      });
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
    case "DELETE_RECIPE":
      return update(state, {
        recipes: { $splice: [[action.id, 1]] },
      });
    case "FILTER_RECIPE":
      return update(state, {
        isUsedFilter: { $set: true },
        filtered: {
          $set: state.recipes.filter((item) => item.group === action.category),
        },
      });
    case "RESET_FILTER_RECIPE":
      return update(state, {
        isUsedFilter: { $set: false },
        filtered: { $set: [] },
      });
    default:
      return state;
  }
};
