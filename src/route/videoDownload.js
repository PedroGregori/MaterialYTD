import { Router } from "express"
import { sendMainPage } from "../controller/videoDownload.js"

export const videoDownloadRoute = Router()

videoDownloadRoute.route("/api")
    .get(sendMainPage)