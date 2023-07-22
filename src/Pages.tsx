import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CommonContext } from './context'
const Publications = React.lazy(() => import('./pages/publications/Publications'))
const Research = React.lazy(() => import('./pages/research/Research'))
const Teaching = React.lazy(() => import('./pages/teaching/Teaching'))
const People = React.lazy(() => import('./pages/people/People'))
const Contact = React.lazy(() => import('./pages/contact/Contact'))
const Notfound = React.lazy(() => import('./pages/404/Notfound'))
const Home = React.lazy(() => import('./pages/home/Home'))

const Pages: React.FC<{}> = () => {
    const [theme, setTheme] = React.useState<'light' | 'dark'>("light")
    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])
    return (
        <CommonContext.Provider
            value={{
                theme,
                setTheme
            }}
        >
            <div className={`${theme === "dark" && "dark"}`}>
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