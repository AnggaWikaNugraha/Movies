import styled from '@emotion/styled'
import React from 'react'
import Header from '../components/Header'

const Layout = ({
    children,
    type,
    setsearch,
    search,
    headerDetail
}) => {
    return (
        <WrapperLayout>
            <Header
                headerDetail={headerDetail}
                type={type}></Header>
            {children}
        </WrapperLayout>
    )
}

export default Layout

const WrapperLayout = styled.div`
    background-color: black;
`