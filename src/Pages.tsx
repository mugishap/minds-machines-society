import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CommonContext } from './context'
const Home = React.lazy(() => import('./pages/home/Home'))

const Pages: React.FC<{}> = () => {

    return (
        <CommonContext.Provider
            value={{
                
            }}
        >
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </CommonContext.Provider>
    )
}

export default Pages