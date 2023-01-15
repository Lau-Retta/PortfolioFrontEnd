export class Trabajos{
    id?: number;
    empresa: String;
    descripcion: String;
    inicio: number;
    finalizacion: number;
    imagen_empresa: String;

    constructor(empresa: String, descripcion: String, inicio: number, finalizacion: number, imagen_empresa:String ){
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.inicio = inicio;
        this.finalizacion = finalizacion;
        this.imagen_empresa = imagen_empresa
    }
}