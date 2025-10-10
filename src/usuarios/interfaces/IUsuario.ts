//definir la estructura de datos de un objeto usuario
//Interfaces --> a las estructuras de datos que se transmiten por la red
//types --> para definir estructuras de datos internas o esquemas de datos
//dtos --> para validar estructuras de datos que se reciben desde la red


export interface IAdress {
    calle: string;
    numero: string;
    ciudad: string;
    pais: string;
}
export interface IUser{
    id: number;
    name: string;
    email: string;
    edad: number;
    rol: string;
    telefonos?: string[]; //opcional
    nif?: string; //opcional
    esdelMadrid?: boolean; //opcional
    direcciones?: IAdress[]; //opcional
}

export interface IRespUser{
    status: boolean;
    code: number;
    msg: string;
    data: IUser;
}


type TUsers = {
    id: number;
    name: string;
    email: string;
}

