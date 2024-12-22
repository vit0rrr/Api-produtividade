import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { Tarefa } from './tarefas.entity';

@Controller('tarefas') // Define que todas as rotas deste controlador começam com "/tarefas"
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Get()
  async obterTodas(): Promise<Tarefa[]> {
    return this.tarefasService.obterTodas();
  }

  @Post()
  async criar(
    @Body('titulo') titulo: string,
    @Body('descricao') descricao?: string,
  ): Promise<Tarefa> {
    return this.tarefasService.criar(titulo, descricao);
  }

  @Patch(':id')
  async atualizar(@Param('id') id: number, @Body('status') status: string): Promise<void> {
    return this.tarefasService.atualizar(id, status);
  }

  @Delete(':id')
  async excluir(@Param('id') id: number): Promise<void> {
    return this.tarefasService.excluir(id);
  }
}
