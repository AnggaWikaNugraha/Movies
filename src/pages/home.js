import React from 'react'
import Layout from '../layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { actionGetMovies } from '../redux/action/movies'
import OnBoard from '../components/OnBoard'
import styled from '@emotion/styled'
import { Gap } from '../GloblasStyles'

const Home = () => {
    const dispatch = useDispatch()
    const stateMovies = useSelector(state => state.stateMovies)

    React.useEffect(() => {
        dispatch(actionGetMovies(
            stateMovies.params.search,
            stateMovies.params.page
        ))
    }, [dispatch, stateMovies.params.search])

    return (
        <Layout
            type={stateMovies.params.search ? '' : 'noValueSearch'
            }>
            {stateMovies.params.search ? stateMovies.params.search &&
                <>
                    {
                        stateMovies.response.movies.length > 0 ?
                            <Container>
                                <WrappImage>
                                    <Banner src={stateMovies.response.movies.length > 0 && stateMovies.response?.movies[0]?.Poster}></Banner>
                                    <TitleBanner fontWeight={700} fontSize={'5rem'}>{stateMovies?.params?.search}</TitleBanner>
                                    <TitleBanner top={'40%'} fontWeight={500} fontSize={'12px'}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</TitleBanner>
                                </WrappImage>
                                <Gap height={'30px'} />
                                <WrappCard className='row'>
                                    {
                                        stateMovies.response.movies.length > 0 && stateMovies.response.movies.map((res, key) => {
                                            return (
                                                <WrapperCard className='col-md-2'>
                                                    <Card className='card'>
                                                        <CardBody className='card-body'>
                                                            <img src={res?.Poster} />
                                                        </CardBody>
                                                    </Card>
                                                </WrapperCard>
                                            )
                                        })
                                    }
                                </WrappCard>
                            </Container>
                            :
                            <WrapperNoFindMovies>
                                <TitleBanner fontWeight={700} fontSize={'5rem'}>Ga nemu film!</TitleBanner>
                            </WrapperNoFindMovies>
                    }

                </>
                : <OnBoard />
            }
        </Layout>
    )
}

export default Home

const Container = styled.div`
    width: 100%;
    padding: 0 30px 0 30px;
`

const WrappImage = styled.div`
    position: relative;
    background-color: black;
    width: 100%;
    height: 500px;
`

const Banner = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.5;
    object-fit: cover;
`

const TitleBanner = styled.div`
    position: absolute;
    top: ${props => props.top ? props.top : '20%'};
    left: ${props => props.left ? props.left : '10%'};
    color: white;
    font-size: ${props => props.fontSize ? props.fontSize : '0px'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : '500'};
    width: 500px;
`
const WrappCard = styled.div`
    padding-left : 13px; 
    padding-right : 13px;
`
const WrapperCard = styled.div`
    padding:0;
`
const CardBody = styled.div`
    border-radius : 0; 
    padding:0;
`

const Card = styled.div`
    border-color: black;
    background-color: black;
`

const WrapperNoFindMovies = styled.div`
    width: 100%;
    height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;
`