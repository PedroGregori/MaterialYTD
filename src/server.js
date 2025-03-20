import express from "express"
import "dotenv/config"

import { videoDownloadRoute } from "./route/videoDownload.js"

const { PORT } = process.env

const app = express()

app.use(express.static("./public"))
app.use(express.json())

app.use(videoDownloadRoute)
    
app.listen(PORT, () => {
    console.log("Server Rodando")
})