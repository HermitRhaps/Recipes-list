// import { CREATE_RECIPE } from "./types/types";
export const createRecipe = (text, image, group, description) => ({
  type: "CREATE_RECIPE",
  payload: {
    text,
    image,
    group,
    description,
  }
});
