import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsRequest } from "../redux/actions";

export const useFetchItems = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cards);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    if (!items?.length) dispatch(fetchProductsRequest());
  }, [items, dispatch]);

  // console.log(items)
  return { items, loading, error };
};
