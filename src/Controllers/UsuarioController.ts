import { Request, Response } from 'express';
import { UsuarioService } from '../Services/UsuarioService';

export class UsuarioController {
  private usuarioService: UsuarioService;

  constructor() {
    this.usuarioService = new UsuarioService();
  }

  async Registrar(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    try {
      const user = await this.usuarioService.CriarUsuario(name, email, password);
      return res.status(201).json({ message: `${user.nome} registrado com sucesso` });
    } catch (error) {
      return res.status(400).json({ message: 'deu ruim', error });
    }
  }
}
