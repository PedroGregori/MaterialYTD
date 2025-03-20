export const sendMainPage = (req, res) => {
    const config = {
        root: "./public/html"
    }

    res.sendFile("index.html", config)
}