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
        console.log(response.data.news)
    } catch (error: any) {
        console.log(error)
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    }
    finally {
        setLoading(false)
    }
}


export const useGetPublications = async ({ setLoading, setPublications }: { setLoading: Function, setPublications: Function }) => {
    try {
        setLoading(true)
        const request = await api.get("/publications/all")
        const response = request.data
        setPublications(response.data.publications)
    } catch (error: any) {
        console.log(error)
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    }
    finally {
        setLoading(false)
    }
}
export const useCreateNews = async ({ data, addNews, setLoading }: { data: INews, addNews: Function, setLoading: Function }) => {
    try {
        setLoading(true)
        const request = await api.post("/news/create", data)
        const response = request.data
        toast.success(response.message)
        addNews(response.news)
    } catch (error: any) {
        console.log(error)
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    }
    finally {
        setLoading(false)
    }
}

export const useCreatePublication = async ({ data, addPublication, setLoading }: { data: IPublication, addPublication: Function, setLoading: Function }) => {
    try {
        setLoading(true)
        const request = await api.post("/publications/create", data)
        const response = request.data
        toast.success(response.message)
        addPublication(response.publication)
    } catch (error: any) {
        console.log(error)
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    }
    finally {
        setLoading(false)
    }
}