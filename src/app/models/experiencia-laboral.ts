export class ExperienciaLaboral {
    id?:number;
    empresa:string;
    descripcion:string;
    fechaInicio:Date;
    fechaFin:Date;

    constructor(empresa:string, descripcion:string, fechaInicio:Date, fechaFin:Date){
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

}
