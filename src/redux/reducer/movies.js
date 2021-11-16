import { GET_MOVIE, GET_MOVIES, SEARCH_MOVIE, ERROR_GET_MOVIES, SET_PAGE, Error_SET_PAGE } from '../type/movies';

let initialState = {
    response: {
        movies: [],
        movie: {}
    },
    params: {
        search: '',
        page: 1
    }
}

export default function reducerMovies(state = initialState, action) {

    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                response: {
                    ...state.response,
                    movies: [...state.response.movies, ...action.payload]
                }
            }

        case ERROR_GET_MOVIES:
            return {
                ...state,
                response: {
                    ...state.response,
                    movies: [],
                    movie: {}
                },
                params: {
                    ...state.params,
                    page: 1
                }
            }

        case GET_MOVIE:
            return {
                ...state,
                response: {
                    ...state.response,
                    movie: action.payload
                }
            }

        case SEARCH_MOVIE:
            return {
                ...state,
                params: {
                    ...state.params,
                    search: action.payload,
                    page: 1
                },
            }

        case SET_PAGE:
            return {
                ...state,
                params: {
                    ...state.params,
                    page: action.payload
                }
            }

        case Error_SET_PAGE:
            return {
                ...state,
                params: {
                    ...state.params,
                    page: 1
                }
            }
        default:
            return state;
    }
}