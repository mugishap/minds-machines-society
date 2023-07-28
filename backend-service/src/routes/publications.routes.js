import { Router } from "express";
import publicationsController from "../controllers/publications.controller.js";

const publicationsRouter = Router()

publicationsRouter.post("/create", publicationsController.createPublication)
publicationsRouter.get("/all", publicationsController.getPublications)

export default publicationsRouter

