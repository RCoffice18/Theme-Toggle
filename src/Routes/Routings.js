import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Content from '../Components/Content'
import Page from '../Components/Page'

const Routings = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Content />} />
                <Route path='/page' element={<Page />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routings