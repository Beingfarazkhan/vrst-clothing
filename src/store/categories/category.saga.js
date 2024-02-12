import { all, takeLatest, call, put } from "redux-saga/effects";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from "./category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
