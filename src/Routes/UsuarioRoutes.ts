import { Router, Request, Response } from 'express';
import { UsuarioController } from '../Controllers/UsuarioController';

const router = Router();
const usuarioController = new UsuarioController();

router.post('/Usuario/Registrar', async (req: Request, res: Response) => {
  await usuarioController.Registrar(req, res);
});

export { router };