import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Home from '../pages/home';

const RouterApp = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    )
}

export default RouterApp
