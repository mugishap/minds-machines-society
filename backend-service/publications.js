const mongoose = require('mongoose')

const PublicationsSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        type: { type: String, required: true },
        created_at: { type: String, required: true },
        firstText: { type: String },
        secondText: { type: String },
        thirdText: { type: String }

    },
    { collection: 'publications' }
)

const model = mongoose.model('PublicationsSchema', PublicationsSchema)

module.exports = model