import React from 'react'
import styled from '@emotion/styled'
import { Gap } from '../GloblasStyles'

const OnBoard = () => {
    return (
        <Container backgroundColor='black'>
            <WrapperCard>
                <Gap height={'50px'} />
                <div className='row'>
                    <div className='col-6'>
                        <Card className='card'>
                            <div classNamecard-body>
                                <h1>Enjoy your TV</h1>
                                <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </div>
                        </Card>
                    </div>
                    <div className='col-6'>
                        <Card className='card'>
                            <div classNamecard-body>
                                <Image width={'350px'} src='https://images.unsplash.com/photo-1596405367208-63505402f113?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlbGV2aXNpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' />
                            </div>
                        </Card>
                    </div>
                </div>
            </WrapperCard>
        </Container>
    )
}

export default OnBoard

const Container = styled.div`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'white'};
    width: 100%;
    height: 50vh;
    padding: 0 300px 0 300px;
`

const WrapperCard = styled.div`
    padding: 0 50px 0 50px;
`

const Card = styled.div`
    padding: 20px;
    color: white;
    background-color: transparent;
    display: flex;
align-items: center;
`

const Image = styled.img`
    width: ${props => props.width ? props.width : '0px'};
    height: ${props => props.height ? props.height : 'opx'};
`