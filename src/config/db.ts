export const setMongoConfig = (mongoose) => {
    const uri = process.env.MONGO_URI
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}