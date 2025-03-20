import express from "express"
import "dotenv/config"

import { videoDownloadRoute } from "./route/videoDownload.js"

const { PORT } = process.env

const app = express()

app.use(videoDownloadRoute)

app.listen(PORT, () => {
    console.log("Server Rodando")
})