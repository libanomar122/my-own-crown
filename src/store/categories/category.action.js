import { CATEGORY_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

// T
export const setCategories = (categoriesArray) => (
    createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesArray)
);