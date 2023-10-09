export class Trabajos{
    id?: number;
    empresa: string;
    descripcion: string;
    inicio: string;
    fin: string;
    img_empresa: string;
    url_info:string

    constructor(empresa: string, descripcion:string, inicio: string, fin: string, img_empresa:string, url_info:string ){
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.inicio = inicio;
        this.fin = fin;
        this.img_empresa = img_empresa;
        this.url_info = url_info;
    }
}