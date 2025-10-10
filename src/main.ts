import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //habilitar el mecanismo de Validación de forma global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist : true, //quitr campos que no esten en el DTO
      forbidNonWhitelisted: true, //si vienen campos que no esten en el DTO, error
      transform: true //transformar los datos al tipo que esperamos (DTO)
    })
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
