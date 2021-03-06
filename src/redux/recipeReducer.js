import { initialState } from "./initialState";
import {
  LOAD_RECIPES,
  CREATE_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
  FILTER_RECIPE,
  RESET_FILTER_RECIPE,
} from "./types/types";
import update from "immutability-helper";
export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECIPES:
      return update(state, { $merge: { recipes: action.recipe } });
    case CREATE_RECIPE:
      return update(state, {
        recipes: {
          $push: [
            action.payload
          ],
        },
      });
    case EDIT_RECIPE:
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
    case DELETE_RECIPE:
      return update(state, {
        recipes: { $splice: [[action.id, 1]] },
      });
    case FILTER_RECIPE:
      return update(state, {
        isUsedFilter: { $set: true },
        filtered: {
          $set: state.recipes.filter((item) => item.group === action.category),
        },
      });
    case RESET_FILTER_RECIPE:
      return update(state, {
        isUsedFilter: { $set: false },
        filtered: { $set: [] },
      });
    default:
      return state;
  }
};
