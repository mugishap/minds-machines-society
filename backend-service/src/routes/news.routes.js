import { Router } from "express";
import newController from "../controllers/news.controller.js";

const newsRouter = Router()

newsRouter.post("/create", newController.createNews)
newsRouter.get("/all", newController.getNews)

export default newsRouter

