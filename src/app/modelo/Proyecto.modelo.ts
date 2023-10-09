export class Proyectos{
    id?: number;
    nombre:String;
    descripcion:String;
    ima_proyecto:String;
    url:String;
    constructor( nombre:String, descripcion:String, ima_proyecto:String, url:String){
      
      this.nombre= nombre;
      this.descripcion= descripcion;
      this.ima_proyecto= ima_proyecto;
      this.url= url;
    }
}