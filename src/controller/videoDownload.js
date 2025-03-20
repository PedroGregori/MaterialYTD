import ytdl from "@distube/ytdl-core"
import { createWriteStream } from "node:fs"
import { formatWithOptions } from "node:util"

export const sendMainPage = (req, res) => {
    const config = {
        root: "./public/html"
    }

    res.sendFile("index.html", config)
}

export const videoInfo = (req, res) => {
    const { url_yt } = req.body

    ytdl.getInfo(url_yt).then(info => {
        const { videoDetails, formats, selectedFormat, bestFormat } = info

        const formatsJustAudio = formats
            .filter(format => format.hasAudio === true && format.hasVideo === false)

        res.status(200).json(formatsJustAudio)
    });
    
}