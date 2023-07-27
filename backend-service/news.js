const mongoose = require('mongoose')

const NewsSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        text: { type: String, required: true },
        created_at: { type: String, required: true }
    },
    { collection: 'news' }
)

const model = mongoose.model('NewsSchema', NewsSchema)

module.exports = model