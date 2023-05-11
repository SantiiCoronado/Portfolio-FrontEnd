export class Estudio {
    id?:number;
    institucion:string;
    titulo:string;
    fechaInicio:Date;
    fechaFin:Date;

    constructor(institucion:string, titulo:string, fechaInicio:Date, fechaFin:Date){
        this.institucion = institucion;
        this.titulo = titulo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }


}
