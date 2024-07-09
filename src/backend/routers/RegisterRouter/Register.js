// Register.js

export default class Register {
    getSubmit(req, res) {
        res.send('Conectado');
    }

    postSubmit(req, res) {
        console.log(req.body);
        res.send('Dados recebidos via POST');
    }
}
