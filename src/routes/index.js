import express from "express";
import temp from  "./tempRoutes.js";
import qtd from  "./qtdRoutes.js";

const routes = (app) => {
    app.route('/mgwine').get((req, res) => {
        res.status(200).send({titulo: "Teste de Conexão"})
    })

    app.use(
        express.json(),
        temp,
        qtd
    )
}

export default routes