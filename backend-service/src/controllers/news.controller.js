import News from "../models/news.js"
import ApiResponse from '../utils/api.response.js'

const createNews = async (req, res) => {
    try {
        const { title, text } = req.body
        const news = await new News({ title, text })
        await news.save()
        return res.status(201).json(ApiResponse.success("News created successfully", { news }))
    } catch (error) {
        console.log(error)
        return res.status(201).json(ApiResponse.error("Internal Server Error", {}))
    }
}

const getNews = async (req, res) => {
    try {
        const news = await News.find({})
        return res.status(201).json(ApiResponse.success("News fetched successfully", { news }))
    } catch (error) {
        console.log(error)
        return res.status(201).json(ApiResponse.error("Internal Server Error", {}))
    }
}

const newsController = {
    createNews,
    getNews
}

export default newsController