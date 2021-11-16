import { Movies } from '../api/movies'
import { SEARCH_MOVIE, GET_MOVIE, GET_MOVIES, ERROR_GET_MOVIES } from '../type/movies'

export const actionGetMovies = (type, page) => async (dispatch) => {
    try {

        await Movies(type, page).then(res => {
            if (res.data.Response == 'False') {
                dispatch({
                    type: ERROR_GET_MOVIES,
                })
            }
            if (res.data.Response == 'True') {
                dispatch({
                    type: GET_MOVIES,
                    payload: res.data.Search
                })
            }
        })

    } catch (error) {

    }
}

export const actionSearch = (search) => async (dispatch) => {

    try {

        dispatch({
            type: SEARCH_MOVIE,
            payload: search
        })

    } catch (error) {
        if (error) {
            console.log(error)
        }
    }

}