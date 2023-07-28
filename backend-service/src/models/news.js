import { Schema, model } from "mongoose"

const NewsSchema = new Schema(
    {
        title: { type: String, required: true },
        text: { type: String, required: true },
        created_at: { type: Number, default: Date.now() }
    }
)

const News = model('news', NewsSchema)

export default News