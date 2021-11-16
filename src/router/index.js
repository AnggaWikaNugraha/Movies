import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Detail from '../pages/detail';
import Home from '../pages/home';

const RouterApp = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<Detail />} />
            </Routes>
        </>
    )
}

export default RouterApp
