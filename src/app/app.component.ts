import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
    title = 'Curso-Angular6-Avanzado';

    ngDoCheck(){
        console.log('EL DoCheck se ha ejecutado');
    }
}
