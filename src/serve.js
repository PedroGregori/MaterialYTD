import express from "express"
import "dotenv/config"

const { PORT } = process.env

const app = express()

app.use(allRoutes)

app.listen(PORT, () => {
    console.log("Server Rodando")
})