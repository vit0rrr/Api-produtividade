import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarefa } from './tarefas.entity';

@Injectable()
export class TarefasService {
  constructor(
    @InjectRepository(Tarefa)
    private readonly tarefaRepository: Repository<Tarefa>,
  ) {}

  async obterTodas(): Promise<Tarefa[]> {
    return this.tarefaRepository.find();
  }

  async criar(titulo: string, descricao?: string): Promise<Tarefa> {
    const novaTarefa = this.tarefaRepository.create({ titulo, descricao });
    return this.tarefaRepository.save(novaTarefa);
  }

  async atualizar(id: number, status: string): Promise<void> {
    await this.tarefaRepository.update(id, { status });
  }

  async excluir(id: number): Promise<void> {
    await this.tarefaRepository.delete(id);
  }
}
