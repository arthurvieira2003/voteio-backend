import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Situacao } from '../Messaging/Enums/Situacao';

@Entity('Usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 155, nullable: true })
  nome!: string | undefined;

  @Column({ length: 155, unique: true,  nullable: true })
  email: string | undefined;

  @Column({ length: 255 })
  senha: string | undefined;

  @CreateDateColumn({ name: 'DtInclusao' })
  dtInclusao: Date | undefined;

  @UpdateDateColumn({ name: 'DtAtualizacao' })
  dtAtualizacao: Date | undefined;

  @Column({ type: 'int', nullable: true })
  situacao: Situacao | undefined;
}
