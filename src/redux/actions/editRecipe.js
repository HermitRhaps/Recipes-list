export const editRecipe = (
  id,
  newText,
  newImage,
  newGroup,
  newDescription
) => ({
  type: "EDIT_RECIPE",
  id,
  newText,
  newImage,
  newGroup,
  newDescription,
});
