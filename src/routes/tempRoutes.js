import express from "express";
import * as tempController from "../controllers/tempController.js";

const router = express.Router();

router.post('/mgwine/Temp', tempController.createTemp);
router.get('/mgwine/LatestTemp', tempController.getLatestTemp);
router.get('/mgwine/Temp', tempController.getTemp);

export default router;
