import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsuariosModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || '194.163.170.169',
      port: Number(process.env.DB_PORT) || 5433,
      database: process.env.DB_NAME || 'bdusarios',
      username: process.env.DB_USERNAME || 'admin',
      password: process.env.DB_PASSWORD || 'admin',
      autoLoadEntities: true,
      synchronize: true,
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
