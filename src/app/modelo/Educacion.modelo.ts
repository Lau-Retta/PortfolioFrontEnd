export class Educacion{
    id?: number;
    instituto:String;
    titulo: String;
    descripcion: String;
    img_educacion: String;
    inicio:String;
    fin:String;

    constructor(instituto:String, titulo: String, descripcion: String,img_educacion: String,inicio:String,fin:String){
       this.instituto= instituto;
       this.titulo=titulo;
       this.descripcion=descripcion;
       this.img_educacion=img_educacion;
       this.inicio=inicio;
       this.fin=fin;
    }
}