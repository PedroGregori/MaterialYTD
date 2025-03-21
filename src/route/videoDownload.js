import { Router } from "express"
import {
    sendMainPage,
    justFormatVideos } from "../controller/videoDownload.js"

export const videoDownloadRoute = Router()

videoDownloadRoute.route("/")
    .get(sendMainPage)

videoDownloadRoute.route("/url/formats/req")
    .post(justFormatVideos)