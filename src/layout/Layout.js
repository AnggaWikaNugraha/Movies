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
                setsearch={setsearch}
                search={search}
                type={type}></Header>
            {children}
        </>
    )
}

export default Layout
