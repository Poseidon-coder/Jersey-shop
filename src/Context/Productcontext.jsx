import { createContext, memo, useContext, useMemo, useState } from "react";
import { Children } from "react";
import { Productdata } from "../Data/Productdata";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(Productdata);
  const [selectBrand, setselectBrand] = useState("All");
  const [selectcategory, setselectCategory] = useState("All");

  const filterProduct = useMemo(() => {
    return product.filter((item) => {
      const Brand = selectBrand === "All" || selectBrand === item.brand;

      const Category =
        selectcategory === "All" || selectcategory === item.category;

      return Brand && Category;
    });
  });

  return (
    <ProductContext.Provider
      value={{
        product,
        selectBrand,
        selectcategory,
        setProduct,
        setselectBrand,
        setselectCategory,
        filterProduct
      }}>
      {children}
    </ProductContext.Provider>
  )

};

export const useProduct = ()=>useContext(ProductContext);