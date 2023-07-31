import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CommonContext } from './context'
import { useGetNews, useGetPublications } from './hooks'
import { INews, IPublication } from './types'
const Admin = React.lazy(() => import('./pages/admin/Admin'))
const Publications = React.lazy(() => import('./pages/publications/Publications'))
const Research = React.lazy(() => import('./pages/research/Research'))
const Teaching = React.lazy(() => import('./pages/teaching/Teaching'))
const People = React.lazy(() => import('./pages/people/People'))
const Contact = React.lazy(() => import('./pages/contact/Contact'))
const Notfound = React.lazy(() => import('./pages/404/Notfound'))
const Home = React.lazy(() => import('./pages/home/Home'))

const Pages: React.FC<{}> = () => {
    const [theme, setTheme] = React.useState<'light' | 'dark'>("light")
    const [showSidebar, setShowSidebar] = React.useState<boolean>(false)
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false)
    const [loading, setLoading] = React.useState<boolean>(false)
    const [news, setNews] = React.useState<INews[]>([])
    const [publications, setPublications] = React.useState<IPublication[]>([])
    const [_publications, set_publications] = React.useState<IPublication[]>([])
    const [query, setQuery] = React.useState<string>('')
    const addNews = ({ _news }: { _news: INews }) => {
        if (!news.length) return setNews([_news])
        setNews([...news, _news])
    }

    const addPublication = ({ publication }: { publication: IPublication }) => {
        if (!publications.length) return setPublications([publication])
        setPublications([...publications, publication])

    }

    useEffect(() => {
        useGetNews({ setLoading, setNews })
        useGetPublications({ setLoading, setPublications })
        set_publications(publications)
    }, [])

    useEffect(() => {
        const searchedPublications = _publications.filter(
            (publication: IPublication) =>
                publication["title"].toLowerCase().includes(query.toLowerCase())
        );
        setPublications(searchedPublications);
    }, [query])

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <CommonContext.Provider
            value={{
                query,
                setQuery,
                news,
                addNews,
                addPublication,
                setNews,
                loading,
                setLoading,
                publications,
                setPublications,
                isLoggedIn,
                setIsLoggedIn,
                theme,
                setTheme,
                showSidebar,
                setShowSidebar
            }}
        >
            <div className={`${theme === "dark" && "dark"}`}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/admin" element={<Admin />} />
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