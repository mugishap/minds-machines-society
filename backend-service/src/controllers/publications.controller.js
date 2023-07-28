import News from "../models/news.js"
import Publication from "../models/publications.js"
import ApiResponse from '../utils/api.response.js'

const createPublication = async (req, res) => {
    try {

        const { title, articles } = req.body

        const publication = await new Publication({
            title,
            articles
        })
        await publication.save()
        return res.status(201).json(ApiResponse.success("Publication created successfuly", {}))
    } catch (error) {
        console.log(error)
        return res.status(500).json(ApiResponse.error("Internal Server Error", {}))
    }
}

const getPublications = async (req, res) => {
    try {
        const publications = await Publication.find({})
        return res.status(200).json(ApiResponse.success("Publications fetched successfully", { publications }))
    } catch (error) {
        console.log(error)
        return res.status(500).json(ApiResponse.error("Internal Server Error", {}))
    }
}

const publicationsController = {
    createPublication,
    getPublications
}

export default publicationsController