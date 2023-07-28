import bodyParser from 'body-parser';
import cors from "cors";
import express from 'express';
import authRouter from './src/routes/auth.routes.js';
import newsRouter from './src/routes/news.routes.js';
import publicationsRouter from './src/routes/publications.routes.js';
import connectDB from './src/utils/database.js';
import http from 'http'
import options from './src/utils/cors.js'

const app = express()
const server = http.createServer(app)

app.use(cors(options))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api/v1/news", newsRouter)
app.use("/api/v1/publications", publicationsRouter)
app.use("/api/v1/auth", authRouter)

connectDB()

server.listen(5000, () => console.log('[LOG]: Server up on 5000'))