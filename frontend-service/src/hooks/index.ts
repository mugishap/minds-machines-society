import { api } from "../api"
import { INews, IPublication, ILoginData } from "../types"
import { toast } from 'react-toastify';

export const useLogin = async ({ data, setIsLoggedIn, setLoading }: { data: ILoginData, setIsLoggedIn: Function, setLoading: Function }) => {
    try {
        setLoading(true)
        const request = await api.post("/auth/login", { ...data })
        const response = request.data
        toast.success(response.message)
        setIsLoggedIn(true)
    } catch (error: any) {
        console.log(error)
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    }
    finally {
        setLoading(false)
    }
}

export const useGetNews = async ({ setLoading, setNews }: { setLoading: Function, setNews: Function }) => {
    try {
        setLoading(true)
        const request = await api.get("/news/all")
        const response = await request.data
        setNews(response.data.news)
        setLoading(false)
    } catch (error: any) {
        console.log(error)
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    }
    finally {
        setLoading(false)
    }
}


export const useGetPublications = async ({ setLoading, setPublications, set_publications, }: { setLoading: Function, setPublications: Function, set_publications: Function }) => {
    try {
        setLoading(true)
        const request = await api.get("/publications/all")
        const response = request.data
        setPublications(response.data.publications)
        set_publications(response.data.publications)
        setLoading(false)
        console.log(response.data.publications)
    } catch (error: any) {
        console.log(error)
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    }
    finally {
        setLoading(false)
    }
}
export const useCreateNews = async ({ data, addNews, setLoading, setNewsData }: { data: INews, addNews: Function, setLoading: Function, setNewsData: Function }) => {
    try {
        setLoading(true)
        const request = await api.post("/news/create", data)
        const response = request.data
        toast.success(response.message)
        addNews(response.news)
        setNewsData({ title: "", text: "" })
    } catch (error: any) {
        console.log(error)
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    }
    finally {
        setLoading(false)
    }
}

export const useCreatePublication = async ({ data, addPublication, setLoading, setPublicationData }: { data: IPublication, addPublication: Function, setLoading: Function, setPublicationData: Function }) => {
    try {
        setLoading(true)
        const request = await api.post("/publications/create", data)
        const response = request.data
        toast.success(response.message)
        addPublication(response.data.publication)
        setPublicationData({
            title: '',
            articles: []
        })

    } catch (error: any) {
        console.log(error)
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    }
    finally {
        setLoading(false)
    }
}