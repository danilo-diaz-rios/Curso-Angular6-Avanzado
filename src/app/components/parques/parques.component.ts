import { Component, Input } from '@angular/core';

@Component({
    selector: 'parques',
    templateUrl: './parques.component.html',
})
export class ParquesComponent {
    @Input() nombre: string;
    @Input('metros_cuadrados') metros: number;
    public vegetacion: string;
    public abierto: boolean;

    constructor(){
        this.nombre = 'Parque natural para caballos';
        this.metros = 450;
        this.vegetacion = 'Alta';
        this.abierto = false;
    }

}