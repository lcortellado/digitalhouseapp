import { useState } from "react";
import { numberFormat, totalSum } from "../Utils/utils";
import { apiUrl } from "../services/api";

export type productProps = {
  id: number;
  product: string;
  points: string;
  is_redemption: boolean;
  image: string;

  createdAt: string;
};

export const useProduct = () => {
  const [products, setProducts] = useState<productProps[]>([]);
  const [productsFilter, setProductsFilter] = useState<productProps[]>([]);
  const [enabledFilterForCategory, setEnabledFilterForCategory] =
    useState<boolean>(false);
  const [total, setTotal] = useState<any>("");
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.warn(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getTotal = () => {
    const result = products.filter((item) => item.is_redemption);
    const total = totalSum(result);
    setTotal(numberFormat(total));
    setEnabledFilterForCategory(true);
    setProductsFilter([]);
  };

  const handleFilterRedeemed = () => {
    const result = products.filter((item) => !item.is_redemption);
    const total = totalSum(result);
    setEnabledFilterForCategory(false);
    setTotal(numberFormat(total));
    setProductsFilter(result);
  };

  const handleFilterWon = () => {
    const result = products.filter((item) => item.is_redemption);
    const total = totalSum(result);
    setEnabledFilterForCategory(false);
    setTotal(numberFormat(total));
    setProductsFilter(result);
  };

  return {
    getProducts,
    handleFilterRedeemed,
    handleFilterWon,
    products,
    productsFilter,
    enabledFilterForCategory,
    total,
    isLoading,
    getTotal,
    setEnabledFilterForCategory,
    setProductsFilter,
  };
};
