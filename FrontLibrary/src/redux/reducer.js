import{
    GET_ALL_BOOKS,
    GET_BOOK_DETAIL,
    POST_BOOK
} from './actionTypes';

const initialState = {
    books: [],
    detail: []
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_BOOKS:
            return {
                ...state,
                books: payload
            }
        case GET_BOOK_DETAIL:
            return{
                ...state,
                detail: payload
            }
            case POST_BOOK:
                return{
                    ...state,
                    books: payload
                }
            default: return state
        }
    }