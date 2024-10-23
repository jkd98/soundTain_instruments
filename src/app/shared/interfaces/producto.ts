export interface Producto {
    _id:string;
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad?: number;
    categoria?: string;
    estante?: string;
    seccionEstante?: string;
    imagen?: string;
}
