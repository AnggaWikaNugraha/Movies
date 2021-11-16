import { GET_MOVIE, GET_MOVIES, SEARCH_MOVIE, ERROR_GET_MOVIES } from '../type/movies';

let initialState = {
    response: {
        movies: [],
        movie: {}
    },
    params: {
        search: '',
        page: 0
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
                    search: action.payload
                }
            }
        default:
            return state;
    }
}