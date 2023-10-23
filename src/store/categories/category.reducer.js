import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	categories: [],
};

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		setCategories(state, action) {
			state.categories = action.payload;
		},
	},
});

export const categoriesReducer = categoriesSlice.reducer;
export const { setCategories } = categoriesSlice.actions;
