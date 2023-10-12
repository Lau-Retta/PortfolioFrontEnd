export class Educacion{
    id?: number;
    instituto:string;
    titulo: string;
    descripcion: string;
    img_educacion: string;
    inicio:string;
    fin:string;

    constructor(instituto:string, titulo: string, descripcion: string,img_educacion: string,inicio:string,fin:string){
       this.instituto= instituto;
       this.titulo=titulo;
       this.descripcion=descripcion;
       this.img_educacion=img_educacion;
       this.inicio=inicio;
       this.fin=fin;
    }
}