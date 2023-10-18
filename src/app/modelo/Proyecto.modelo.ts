export class Proyectos{
    id?: number;
    nombre:string;
    descripcion:string;
    ima_proyecto:string;
    url:string;
    constructor( nombre:string, descripcion:string, ima_proyecto:string, url:string){
      
      this.nombre= nombre;
      this.descripcion= descripcion;
      this.ima_proyecto= ima_proyecto;
      this.url= url;
    }
}