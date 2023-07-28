import { Schema, model } from "mongoose"


const PublicationsSchema = new Schema(
    {
        title: { type: String, required: true },
        articles: [{
            name: {
                type: String,
                required: true
            },
            collaborators: {
                type: String,
                required: true
            },
            time: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }],
        created_at: { type: Number, default: Date.now() },
    }
)

const Publication = model('PublicationsSchema', PublicationsSchema)

export default Publication