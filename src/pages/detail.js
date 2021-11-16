import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import styled from '@emotion/styled'
import { Gap } from '../GloblasStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { actionGetOneMovie } from '../redux/action/movies'

const Detail = () => {
    const stateMovies = useSelector(state => state.stateMovies)
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionGetOneMovie(id))
    }, [])

    return (
        <Layout
            headerDetail
        >
            <Gap height={'150px'} />
            <Container>
                <div className='row'>
                    <WrappRow className='col-md-6'>
                        <img src={stateMovies.response.movie?.Poster} />
                    </WrappRow>
                    <WrappRow className='col-md-6'>
                        <WrappDetail>
                            <h3>Detail Movie</h3>
                            <TitleBanner fontWeight={700} fontSize={'14px'}>Title: {stateMovies.response?.movie?.Title}</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'14px'}>Year: {stateMovies.response?.movie?.Year}</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'14px'}>Rated: {stateMovies.response?.movie?.Rated}</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'14px'}>Released: {stateMovies.response?.movie?.Released}</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'14px'}>Runtime: {stateMovies.response?.movie?.Runtime}</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'14px'}>Genre: {stateMovies.response?.movie?.Genre}</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'14px'}>Director: {stateMovies.response?.movie?.Director}</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'14px'}>Writer: {stateMovies.response?.movie?.Writer}</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'14px'}>Actors: {stateMovies.response?.movie?.Actors}</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'14px'}>Language: {stateMovies.response?.movie?.Language}</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'14px'}>Country: {stateMovies.response?.movie?.Country}</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'14px'}>Awards: {stateMovies.response?.movie?.Awards}</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'14px'}>plot: {stateMovies.response?.movie?.Plot}</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'14px'}>Ratings
                                <ul>
                                    {
                                        stateMovies.response?.movie?.Ratings?.map((res, key) => {
                                            return (
                                                <li>Source : {res.Source}, value : {res.Value}</li>
                                            )
                                        })
                                    }

                                </ul>
                            </TitleBanner>

                        </WrappDetail>
                    </WrappRow>
                </div>
            </Container>
        </Layout>
    )
}

export default Detail

const Container = styled.div`
    width: 100%;
    height: 80vh;
    padding: 0 30px 0 30px;
    background-color: black;
`

const WrappRow = styled.div`
    display: flex;
    justify-content: center;
    color: white;
`

const WrappDetail = styled.div`
    width : 100%
`


const TitleBanner = styled.div`
    color: white;
    font-size: ${props => props.fontSize ? props.fontSize : '0px'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : '500'};
`