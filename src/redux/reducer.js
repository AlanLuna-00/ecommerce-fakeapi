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
            // eslint-disable-next-line no-case-declarations
            const cardsCopy = [...state.cardsForFilter];
            // eslint-disable-next-line no-case-declarations
            const filteredCards = cardsCopy.filter((card) => card.category === action.payload);
            return {
                ...state,
                cards: 
                    action.payload === 'all' ? state.cardsForFilter : filteredCards,
            };
        case ORDER_BY_PRICE:
            return {
                ...state,
                cards: state.cards.sort((a, b) => a.price - b.price),
            };
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                cards : action.payload,
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

