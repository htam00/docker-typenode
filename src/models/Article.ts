import * as mongoose from 'mongoose'
import { Schema } from 'mongoose'

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

export const Article =  mongoose.model("Article", ArticleSchema)
