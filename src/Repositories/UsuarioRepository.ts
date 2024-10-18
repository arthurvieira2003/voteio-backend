import { EntityRepository, Repository } from 'typeorm';
import { Usuario } from '../Entidades/Usuario';


@EntityRepository(Usuario)
export class UsuarioRepository extends Repository<Usuario> {
    
}
