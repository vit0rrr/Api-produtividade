import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tarefa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column({ nullable: true })
  descricao: string;

  @Column({ default: 'pendente' })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  criadaEm: Date;
}
