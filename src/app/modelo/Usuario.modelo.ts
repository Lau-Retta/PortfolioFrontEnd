export class Usuario{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    banner:String;
    descripcion : String;
    instagram : String;
    linkedin : String;
    github : String;

    constructor(nombre : String, apellido :String, img:String, banner:String,descripcion : String, instagram : String,
        linkedin : String, github : String ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.descripcion = descripcion;
        this.instagram = instagram;
        this.linkedin = linkedin;
        this.github = github;
        this.banner=banner;
    }
}