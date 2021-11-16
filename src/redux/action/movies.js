import { Movies, OneMovie } from '../api/movies'
import { SEARCH_MOVIE, GET_MOVIE, GET_MOVIES, ERROR_GET_MOVIES, SET_PAGE, Error_SET_PAGE } from '../type/movies'

export const actionGetMovies = (type) => async (dispatch, getState) => {
    try {
        const NewPage = getState().stateMovies.params.page;
        await Movies(type, NewPage).then(res => {
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

export const actionGetOneMovie = (idMovie) => async (dispatch, getState) => {
    try {
        await OneMovie(idMovie).then(res => {
            if (res.data.Response == 'False') {
                console.log(res.data)
            }
            if (res.data.Response == 'True') {
                dispatch({
                    type: GET_MOVIE,
                    payload: res.data
                })
            }
        })

    } catch (error) {

    }
}

export const actionSetPage = (page) => async (dispatch) => {

    try {

        dispatch({
            type: SET_PAGE,
            payload: page
        })

    } catch (error) {
        if (error) {
            dispatch({
                type: Error_SET_PAGE
            })
        }
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