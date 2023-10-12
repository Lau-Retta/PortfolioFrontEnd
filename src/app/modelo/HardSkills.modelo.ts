export class Habilidad{
    id?: number;
    nivel: number;
    habilidad:string;

    constructor( nivel:number, hablidad:string){
      this.nivel = nivel;
      this.habilidad=hablidad;
    }
}