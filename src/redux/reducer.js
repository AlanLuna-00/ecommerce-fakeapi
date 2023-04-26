/* eslint-disable no-case-declarations */
import { FILTER_CARDS, ORDER_BY_PRICE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCT_DETAIL_REQUEST, CLEAN_DETAIL } from "./actions";

const initialState = {
    cards: [],
    cardsForFilter: [],
    cardDetail: {},
    cart: [],
    loading: true,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_CARDS:
            const cardsCopy = [...state.cardsForFilter];
            const filteredCards = cardsCopy.filter((card) => card.category === action.payload);
            return {
                ...state,
                cards:
                    action.payload === 'all' ? state.cardsForFilter : filteredCards,
            };
        case ORDER_BY_PRICE:
            let sortedCards = [...state.cards]
                sortedCards.sort((a, b) => {
                if (action.payload === 'low') {
                    return a.price - b.price;
                } else if (action.payload === 'high') {
                    return b.price - a.price;
                } else {
                    return null;
                }
            });
            return {
                ...state,
                cards: sortedCards,
            };

        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                cards: action.payload,
                cardsForFilter: action.payload,
                loading: false,
            };
        case FETCH_PRODUCT_DETAIL_REQUEST:
            return {
                ...state,
                cardDetail: action.payload,
                loading: false,
            };
        case CLEAN_DETAIL:
            return {
                ...state,
                cardDetail: {},
            };
        default:
            return state;
    }
};

export default reducer;

