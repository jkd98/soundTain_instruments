import { Producto } from "./producto";


export interface Respuesta {
    msg: string;
    productos: Producto[];
}
