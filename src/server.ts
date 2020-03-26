import app  from './app'

// Define PORT Access
const port = process.env.PORT || 8080

// Running Server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`SERVER:: localhost:${port}`)
})

