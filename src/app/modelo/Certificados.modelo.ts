export class Certificado{
    id?: number; 
    descripcion: string; 
    certificado: string;

    constructor(descripcion:string, certificado: string ){
        
        this.descripcion = descripcion;
        this.certificado = certificado;
    }
}