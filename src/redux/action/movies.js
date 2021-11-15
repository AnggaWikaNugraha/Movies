import { Movies } from '../api/movies'
import { SEARCH_MOVIE, GET_MOVIE, GET_MOVIES } from '../type/movies'

export const actionGetMovies = (type, page) => async (dispatch) => {
    try {

        await Movies(type, page).then(res => console.log(res))

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