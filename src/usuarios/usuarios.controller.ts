import { BadRequestException, Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('usuarios') //tabla de mapeo ruta y controlador
export class UsuariosController {
  // inyectar el servicio UsuariosService en UsuariosController
  // solo se inyectan clases con el decorador @Injectable
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get() /* endpoint raíz -- home */
  getHome(){

    return 'home del seccion usuarios'

  }

  //devuelve todos los productos
  // --> select * from productos
  @Get('all') // endpoint raíz
  getAll(){

    return this.usuariosService.findAll();

  }

  //se le pasa el $id por Get y se devuelve ese producto (objeto)
  // --> select * from productos where $id = productos.id
  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({version: '4'})) id: string){

    return this.usuariosService.findOne(id);
    
  }

  @Post('new') //endpoint raíz
  add(@Body() usuarioDTO: CreateUserDto){
    return this.usuariosService.new(usuarioDTO);

    //return this.usuariosService.new(usuario);

  }

 /*   // METODO ENDPOINT --> DECORADOR get, post, put, delete...
   @Post('new') // endpoint raíz
  add(@Body() usuario: IUser){
    // --------- validar edad -------
    //variables bandera
    let esNumber: Boolean = true;
    let esmayor18: Boolean = true;
    let msgerror: string[] = [];
    //extrar manualmente los datos del body (REQUEST) --> caso ezpress.js ...
    //debemos de VALIDARLO --> email este ok
    //usuario = peticion.body;
    console.log(usuario.email, usuario.edad);
    //mi controlador debe de validar los datos: edad> 18 y email correcto
    if (typeof usuario.edad !== 'number'){
      //Excepción (en caso de que la request no sea correcto le saltará el message)
      esNumber = false;
      msgerror.push("La edad debe ser un número");
    }
    if (usuario.edad < 18){
      esmayor18 = false;
      msgerror.push (" y la edad debe ser mayor de 18");
    }
    if(!esNumber || !esmayor18){
      throw new BadRequestException ({
        success: false,
        message: msgerror
      })
    }

    // ----------- validar email ------------
  
    

    console.log('Usuario recibido', usuario);
    // extraer los datos del body (POST) o parámentros (GET) de mi REQUEST

    //return this.usuariosService.new();

  }*/

  // METODO INTERNO para borrar usuarios, NO ES ENDPOINT
  delete(){

    return 'borrado de usuarios'

  }

}
