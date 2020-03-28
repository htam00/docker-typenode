import * as mongoose from 'mongoose'
import { Schema, Document } from 'mongoose'

export interface ArticleInterface extends Document {
    title: String,
    description: String
}

const ArticleSchema: Schema = new Schema({
    title: { type: String, required: true},
    description: {type: String, required: true} 
})

const ArticleModel = mongoose.model<ArticleInterface>("Article", ArticleSchema)
export default ArticleModel
