import { Routes, Route } from "react-router-dom";
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/category.action";
import { useEffect } from "react";

import {
    getCategoriesAndDocuments
} from "../../utils/firebase/firebase.utils";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments();

            dispatch(setCategories(categoriesArray));
        };

        return getCategoriesMap;
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=':category' element={<Category />} />
        </Routes>
    );
}

export default Shop;