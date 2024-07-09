// router.js

import express from 'express';
import Register from '../routers/RegisterRouter/Register.js'; // Ajuste o caminho conforme a estrutura do seu projeto

const router = express.Router();

// Rota GET /submit
router.get('/', (req, res) => {
    const registerInstance = new Register();
    registerInstance.getSubmit(req, res);
});

// Rota POST /submit
router.post('/', (req, res) => {
    const registerInstance = new Register();
    registerInstance.postSubmit(req, res);
});

export default router;
