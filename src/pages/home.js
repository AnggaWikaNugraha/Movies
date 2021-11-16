import React, { useState } from 'react'
import Layout from '../layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { actionGetMovies, actionSetPage } from '../redux/action/movies'
import OnBoard from '../components/OnBoard'
import styled from '@emotion/styled'
import { Gap } from '../GloblasStyles'
import { Link } from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch()
    const stateMovies = useSelector(state => state.stateMovies)
    const [noData, setnoData] = useState(true)

    React.useEffect(() => {
        dispatch(actionGetMovies(
            stateMovies.params.search
        ))
    }, [
        dispatch,
        stateMovies.params.search,
        stateMovies.params.page
    ])

    window.onscroll = () => {
        // penting
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
            dispatch(actionSetPage(stateMovies.params.page + 1))
        }
    }

    const [img, setimg] = useState('')
    console.log(img)

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

                                                        <a onClick={() => setimg(res.Poster)} id='buttonModal' type="button" data-toggle="modal" data-target="#exampleModalCenter">
                                                            <CardBody className='card-body'>
                                                                <img src={res?.Poster} />

                                                            </CardBody>
                                                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                                <div class="modal-dialog modal-dialog-centered" role="document">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header" style={{ backgroundColor: 'black' }}>
                                                                            <div></div>
                                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                                <span aria-hidden="true">&times;</span>
                                                                            </button>
                                                                        </div>
                                                                        <Modal class="modal-body" style={{ backgroundColor: 'black' }}>
                                                                            <img src={img} />
                                                                        </Modal>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <Link style={{
                                                            color: 'white',
                                                            position: 'absolute',
                                                            bottom: '10px',
                                                            textDecoration: 'none',
                                                            left: '10px',
                                                            fontSize: '18px',
                                                            backgroundColor: 'red',
                                                            padding: '3px 5px 3px 5px',
                                                            borderRadius: '5px'
                                                        }} to={`/detail/`, res.imdbID} state={res.imdbID}>
                                                            Detail
                                                        </Link>
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

const Nav = styled.nav`
    color: wheat;
`

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

const Modal = styled.div`
    padding : 0;
    display: flex;
    justify-content: center;
    align-items: center;`
