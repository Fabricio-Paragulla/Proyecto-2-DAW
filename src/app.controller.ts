import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/") /* endpoint raíz */
  getHello(): string {
    return this.appService.getHello();
  }

  @Get() /* endpoint /usuarios */
  getUsuarios(): any {

    return [

      {id: 1, nombre: "Juan", apellidos: "Pérez" },
      {id: 2, nombre: "Ana", apellidos: "López" },

    ];

  }

}
