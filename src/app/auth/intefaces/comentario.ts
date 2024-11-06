import { Producto } from "../../shared/interfaces/producto"
import { Usuario } from "../../shared/interfaces/usuario"

export interface Comentario {
    calificacion: number
        comentario: string
        producto:Producto['_id'],
}