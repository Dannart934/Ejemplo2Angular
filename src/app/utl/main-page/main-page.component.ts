import { Component } from '@angular/core';
interface AlumnosUtl{
  nombre:string;
  edad:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  alumnosUtl:AlumnosUtl[]=[
    {
      nombre:'Mario',
      edad:15,
    },
    {
      nombre:'Laura',
      edad:21, 
    },
    {
      nombre:'Danna',
      edad:20,
    }
  ]
  regAlumno:AlumnosUtl={
    nombre:'',
    edad:0
  }
  agregar(){
    //console.log(this.alumnosUtl)
    this.alumnosUtl.push(this.regAlumno);
    this.regAlumno={
      nombre:'',
      edad:0
    }
  }
}


