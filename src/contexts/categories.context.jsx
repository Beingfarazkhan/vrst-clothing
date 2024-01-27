import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../shop-data";
import {
  getCategoriesAndDocuments,
  // addCollectionAndDocuments,
} from "../utils/firebase/firebase.utils";

// addCollectionAndDocuments("categories", SHOP_DATA);

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
