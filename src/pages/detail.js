import React, { useState } from 'react'
import Layout from '../layout/Layout'
import styled from '@emotion/styled'
import { Gap } from '../GloblasStyles'
import { useDispatch, useSelector } from 'react-redux'

const Detail = () => {
    const stateMovies = useSelector(state => state.stateMovies)

    return (
        <Layout
            headerDetail
        >
            <Gap height={'150px'} />
            <Container>
                <div className='row'>
                    <WrappRow className='col-md-6'>
                        <img src='https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg' />
                    </WrappRow>
                    <WrappRow className='col-md-6'>
                        <WrappDetail>
                            <h3>Detail Movie</h3>
                            <TitleBanner fontWeight={700} fontSize={'16px'}>Title</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'16px'}>Year</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'16px'}>Rated</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'16px'}>Released</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'16px'}>Runtime</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'16px'}>Genre</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'16px'}>Director</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'16px'}>Writer</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'16px'}>Actors</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'16px'}>Language</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'16px'}>Country</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'16px'}>Awards</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'16px'}>plot</TitleBanner>
                            <TitleBanner fontWeight={700} fontSize={'16px'}>Ratings
                                <ul>
                                    <li>Source : IMV, value : 9/10</li>
                                    <li>Source : IMV, value : 9/10</li>

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
    height: 95vh;
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