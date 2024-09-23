import { Router } from "express";
import homeController from './src/views/controllers/home-controller.js';


const router = Router();


router.use(homeController);

export default router;