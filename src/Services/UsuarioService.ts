import { getCustomRepository } from 'typeorm';
import { UsuarioRepository } from '../Repositories/UsuarioRepository';
import { Usuario } from '../Entidades/Usuario';
import * as bcrypt from 'bcrypt'; // biblioteca para hash de senhas

export class UsuarioService {
  private usuarioRepository = getCustomRepository(UsuarioRepository);

  async CriarUsuario(nome: string, email: string, password: string): Promise<Usuario> {
    // Hash a senha antes de armazená-la
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Criação do usuário com os dados fornecidos
    const user = this.usuarioRepository.create({ nome, email, senha: hashedPassword });
    
    // Salvar o usuário no repositório
    return await this.usuarioRepository.save(user);
  }
}
