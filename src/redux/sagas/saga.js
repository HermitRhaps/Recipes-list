import { takeEvery, put, select, call } from "redux-saga/effects";

export const getRecepies = (state) => state.recipeReducer.recipes;

function* loadLocalStorage() {
  yield put({
    type: "LOAD_RECIPES",
    recipe: JSON.parse(localStorage.getItem("recipes")),
  });
}

function* saveLocalStorage() {
  const repipes = yield select(getRecepies);

  yield call(function () {
    localStorage.setItem("recipes", JSON.stringify(repipes));
  });
}

export function* sagaWatcher() {
  yield takeEvery("FETCH_RECIPES", loadLocalStorage);
  yield takeEvery("CREATE_RECIPE", saveLocalStorage);
  yield takeEvery("EDIT_RECIPE", saveLocalStorage);
  yield takeEvery("DELETE_RECIPE", saveLocalStorage);
}
