import Qtd from '../models/quantidade.js';
import logger from '../config/logger.js';

export const getQtd = async (req, res) => {
  try {
    const qtds = await Qtd.find();
    res.status(200).json(qtds);
  } catch (err) {
    console.log(err.message);
    logger.error({
        usecase: "getQtd",
        response: err.message,
        status: err.status
    });
    res.status(err.status || 500).json({ 
      usecase: "getQtd",
      response: err.message,
      status: err.status
    });
  }
};

export const createQtd = async (req, res) => {
  try {
    const qtdData = req.body; // Dados a serem inseridos
    const qtd = new Qtd(qtdData);
    await qtd.save();
    res.status(201).json(qtd);
  } catch (err) {
    console.log(err.message);
    logger.error({
        usecase: "createQtd",
        response: err.message,
        status: err.status
    });
    res.status(err.status || 500).json({
      usecase: "createQtd",
      response: err.message,
      status: err.status});
  }
};
