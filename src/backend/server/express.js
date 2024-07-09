// Importando módulos do Express e CORS
import express from 'express';
import cors from 'cors';
import router from '../routers/router.js'; // Ajuste o caminho conforme a estrutura do seu projeto

const app = express();
const port = 3000;

// Middleware para permitir CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Usando as rotas definidas no arquivo router.js
app.use('/submit', router);

// Iniciando o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
