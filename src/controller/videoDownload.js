import ytdl from "@distube/ytdl-core"
import { createWriteStream } from "node:fs"

export const sendMainPage = (req, res) => {
    const config = {
        root: "./public/html"
    }

    res.sendFile("index.html", config)
}

export const justFormatVideos = async (req, res) => {
    const { url_yt } = req.body

    try {
        const {
            formats,
            videoDetails
         } = await ytdl.getInfo(url_yt)

         const videoFormats = ytdl.filterFormats(formats, "video")

        res.status(200).json({ videoFormats, videoDetails })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const downloadVideo = (req, res) => {
    const { urlVideo } = req.body

    const video = ytdl(urlVideo)
}