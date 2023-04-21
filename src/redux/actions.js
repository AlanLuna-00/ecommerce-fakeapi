export const FILTER_CARDS = 'FILTER_CARDS';
export const ORDER_BY_PRICE = 'ORDER_BY_PRICE';
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCT_DETAIL_REQUEST = 'FETCH_PRODUCT_DETAIL_REQUEST';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';


export const filterCards = (category) => ({ type: FILTER_CARDS, payload: category });

export const orderByPrice = () => ({ type: ORDER_BY_PRICE });

export const fetchProductsRequest = () => {
    return function (dispatch) {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: FETCH_PRODUCTS_REQUEST, payload: data });
            });
    }
};

export const fetchProductDetailRequest = (id) => {
    return function (dispatch) {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: FETCH_PRODUCT_DETAIL_REQUEST, payload: data });
            });
    }
}

export const cleanDetail = () => ({ type: CLEAN_DETAIL });

