import { ArrayMaxSize, ArrayMinSize, IsArray, IsBoolean, IsEmail, IsEmpty, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, IsUUID, Matches, Max, MaxLength, Min, MinLength, ValidateNested } from "class-validator";

import { AdressDTO } from "./adress.dto";
import { Type } from "class-transformer";

//petición a los roles que hay en la tabla de los roles de la api
const roles: string[] = ["administrador", "usuario", "invitado"];

export class CreateUserDto {

    // @IsNumber() /* función externa que valida que es un numero */
    @IsUUID() //ES UN IDENTIFICADOR UNICO UNIVERSAL 32 o 36 caracteres (~)
    id: number;

    //Edad esta comprendida entre 18 y 58
    @IsInt({message: "La edad es un entero"}) /* función externa que valida que es un numero entero */
    @Min(18, {message: "La edad mínima es 18 años"})
    @Max(58, {message: "La edad máxima es 58 años"})
    edad: number;

    //@IsNotEmpty()
    @IsOptional()
    @IsString() /* función externa que valida que es un string */
    @MinLength(5, {message: "El nombre debe ser minimo de 5 caracteres"})
    @MaxLength(10, {message: "El nombre debe ser maximo de 10 caracteres"})
    name: string;

    @IsEmail() /* función externa que valida que es un email */
    email: string;

    @IsOptional()
    @IsArray() /* función externa que valida que es un array */
    @ArrayMinSize(2, {message: "Debe tener al menos 2 telefonos"})
    @ArrayMaxSize(3, {message: "Debe tener al menos 3 telefonos"})
    telefonos: string[];

    @IsOptional()
    @IsString()
    @Matches(/^\d{8}[A-Z]$/, {message: "El nif no es correcto, 8 numeros y una letra"})
    nif: string;

    @IsIn(roles, {message: `El rol debe ser uno de los siguientes: ${roles}`})
    rol: string;

    @IsOptional()
    @IsBoolean()
    esdelMadrid: boolean; //true or false

    @IsOptional()
    @IsArray()
    @ArrayMinSize(3, {message: "Debe tener al menos 3 direcciones"})
    @ValidateNested({each: true}) //valida cada uno de los elementos del array
    @Type(() => AdressDTO) // indicia el tipo de los elementos del array
    direcciones: AdressDTO[]; //array de direcciones
}