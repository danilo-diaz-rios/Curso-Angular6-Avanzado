import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
    title = 'NGZOO';
    emailContacto: String;

    ngOnInit(){
        this.emailContacto = localStorage.getItem('emailContacto');
        //console.log(localStorage.getItem('emailContacto'));
    }

    ngDoCheck(){
        //console.log('EL DoCheck se ha ejecutado');
        this.emailContacto = localStorage.getItem('emailContacto');
    }

    borrarEmail(){
        localStorage.removeItem('emailContacto');
        localStorage.clear();
        this.emailContacto = null;
    }
}
