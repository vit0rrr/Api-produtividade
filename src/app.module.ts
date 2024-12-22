import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarefasModule } from './tarefas/tarefas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: '123',
      database: 'api_produtividade',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Apenas para desenvolvimento
    }),
    TarefasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
