import { CATEGORIES_ACTION_TYPES, Category, CategoryItem } from "./category.types";
import {
  createAction,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;                                                  

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>;

export type CreateAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed;

export const fetchCategoriesStart = (): FetchCategoriesStart =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray: Category[]) : FetchCategoriesSuccess =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailed = (error:Error):FetchCategoriesFailed =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// export const fetchCategoriesStartAsync = () => {
//   return async (dispatch) => {
//     dispatch(fetchCategoriesStart());
//     try {
//       const categoriesArray = await getCategoriesAndDocuments("categories");
//       dispatch(fetchCategoriesSuccess(categoriesArray));
//     } catch (error) {
//       dispatch(fetchCategoriesFailure(error));
//     }
//   };
// };
