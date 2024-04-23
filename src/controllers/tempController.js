import moment from 'moment';
import Temp from '../models/temperatura.js';
import logger from '../config/logger.js';

export const getTemp = async (req, res) => {
  try {
    const temps = await Temp.find();
    res.status(200).json(temps);
  } catch (err) {
    console.log(err.message);
    logger.error({
        usecase: "getTemp",
        response: err.message,
        status: err.status
    });
    res.status(err.status || 500).json({
      usecase: "getTemp",
      response: err.message,
      status: err.status
    });
  }
};

export const getLatestTemp = async (req, res) => {
  try {
    const temps = await Temp.find();
    
    if (temps.length === 0) {
      // Se não houver registros, retornar um JSON vazio ou mensagem adequada.
      return res.status(200).json(null);
    }

    let latestTemp = temps[0];
    let latestDate = moment(temps[0].dateTime);

    for (const temp of temps) {
      const tempDate = moment(temp.dateTime);
      if (tempDate.isAfter(latestDate)) {
        latestTemp = temp;
        latestDate = tempDate;
      }
    }

    res.status(200).json(latestTemp);
  } catch (err) {
    console.log(err.message);
    logger.error({
        usecase: "getLatestTemp",
        response: err.message,
        status: err.status
    });
    res.status(err.status || 500).json({
      usecase: "getLatestTemp",
      response: err.message,
      status: err.status
    });
  }
};

export const createTemp = async (req, res) => {
  try {
    const tempData = req.body; // Dados a serem inseridos
    const temp = new Temp(tempData);
    await temp.save();
    res.status(201).json(temp);
  } catch (err) {
    console.log(err.message);
    logger.error({
        usecase: "createTemp",
        response: err.message,
        status: err.status
    });
    res.status(err.status || 500).json({
      usecase: "createTemp",
      response: err.message,
      status: err.status
    });
  }
};
