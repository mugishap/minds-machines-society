import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CommonContext } from './context'
import Publications from './pages/publications/Publications'
import Research from './pages/research/Research'
import Teaching from './pages/teaching/Teaching'
import People from './pages/people/People'
import Contact from './pages/contact/Contact'
import Notfound from './pages/404/Notfound'
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
                        <Route path="/publications" element={<Publications />} />
                        <Route path="/research" element={<Research />} />
                        <Route path="/teaching" element={<Teaching />} />
                        <Route path="/people" element={<People />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Notfound />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </CommonContext.Provider>
    )
}

export default Pages