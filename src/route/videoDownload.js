import { Router } from "express"
import {
    sendMainPage,
    videoInfo } from "../controller/videoDownload.js"

export const videoDownloadRoute = Router()

videoDownloadRoute.route("/api")
    .get(sendMainPage)
    .post(videoInfo)