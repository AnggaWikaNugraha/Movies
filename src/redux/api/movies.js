import axios from 'axios'
import { config } from '../../config'

export function Movies(type, page) {
    return axios.get(`${config.url}?apikey=${config.key}&s=${type}&page=${page}`)
}

export function OneMovie(idMovie) {
    return axios.get(`${config.url}/?apikey=${config.key}&i=${idMovie}`)
}