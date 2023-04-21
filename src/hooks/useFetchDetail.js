import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetailRequest } from '../redux/actions';

export const useFetchDetail = (id) => {
    const dispatch = useDispatch();
    const { cardDetail, loading, error } = useSelector((state) => state);
    useEffect(() => {
        dispatch(fetchProductDetailRequest(id));
    }, [dispatch, id]);
    return { cardDetail, loading, error };
}
