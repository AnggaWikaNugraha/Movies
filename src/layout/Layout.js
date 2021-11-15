import React from 'react'
import Header from '../components/Header'

const Layout = ({
    children,
    type
}) => {
    return (
        <>
            <Header type={type}></Header>
            {children}
        </>
    )
}

export default Layout
