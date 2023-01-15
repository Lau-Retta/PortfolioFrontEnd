export class Usuario{
    id?: number;
    nombre: String;
    apellido: String;
    descripcion: String;
    img_perfil: String;
    urlFacebook : String;
    urlInstagram : String;
    urlLinkedin : String;
    urlGithub : String;

    constructor(nombre : String, apellido :String, descripcion:String, img_perfil:String, urlFacebook:String, urlInstagram:String, urlLinkedin:String, urlGithub:String ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.img_perfil = img_perfil;
        this.urlFacebook = urlFacebook;
        this.urlInstagram = urlInstagram;
        this.urlLinkedin = urlLinkedin;
        this.urlGithub = urlGithub;
    }
}