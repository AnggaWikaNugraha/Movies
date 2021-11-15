import React from 'react'
import Header from '../components/Header'

const Layout = ({
    children,
    type,
    setsearch,
    search
}) => {
    return (
        <>
            <Header
                type={type}></Header>
            {children}
        </>
    )
}

export default Layout
