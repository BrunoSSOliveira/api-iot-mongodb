import express from "express";
import * as qtdController from "../controllers/qtdController.js";

const router = express.Router();

router.post('/mgwine/Qtd', qtdController.createQtd);
router.get('/mgwine/Qtd', qtdController.getQtd);

export default router;
