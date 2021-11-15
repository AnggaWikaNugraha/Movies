import React from 'react'
import styled from '@emotion/styled'
import { Gap, Input } from '../GloblasStyles'

const Header = ({
    type,
    typeNavbar,
    setsearch,
    search
}) => {
    switch (typeNavbar) {

        default:
            return (
                <Navbar type={type}>
                    {!type && <Brand><P>Movies</P></Brand>}
                    <WrappSearch>
                        <Gap width={'10px'} />
                        <Search search={search}>
                            <ion-icon name="search-outline"></ion-icon>
                            <Input onChange={(e) => setsearch(e.target.value)} placeholder='Cari Movies' />
                        </Search>
                    </WrappSearch>
                </Navbar>
            )
    }
}

export default Header

const Navbar = styled.nav`
    width: 100%;
    background-color: #BE123C;
    height: ${props => props.type ? '50vh' : '50px'};
    display: flex;
    align-items: center;
    padding: 0 100px 0 100px;
    justify-content: space-between;
    background: url('https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png');
`

const Brand = styled.div`
    padding:8px ;
    display: flex;
    justify-content: center;
    align-items: center;
`

const P = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: white;
`

const WrappSearch = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Search = styled.div`
    background-color : white;
    display: flex;
    flex: 1;
    padding: 0 10px 0 10px;
    height: ${props => props.search ? '65%' : '10%'};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`