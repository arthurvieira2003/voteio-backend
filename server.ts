import express from "express";
import { createConnection } from 'typeorm';
import { router } from './src/Routes/UsuarioRoutes';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/voteio', router);

createConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}).catch((error) => console.log(error));