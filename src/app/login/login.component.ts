import { DashboardComponent } from './../layout/dashboard/dashboard.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'

//Arreglo de background de imagenes
import { CAMBIA_IMAGEN } from './../models/bg.images';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    forma: FormGroup;

    imagen:any[] =[];
    bgImages:any[] = CAMBIA_IMAGEN;

    constructor(public router: Router) {
    }

    ngOnInit() {
        let  img =  Math.floor(Math.random() * 6) + 1
        this.cambiaImage(img)

        this.validacionCampos();
    }

    validacionCampos(){
        this.forma = new FormGroup({
            email: new FormControl('',[
                                        Validators.required,
                                        Validators.email
                                    ]),
           password: new FormControl('',[Validators.required])
        })
    }

    cambiaImage(n){

       console.log(n)
       this.imagen = [
             ... this.imagen,{url: `${this.bgImages[n].nombre}`}
      ]
        // this.imagen.push({
        //         url: `${this.bgImages[n].nombre}`,
        //         });

    }

    logIn(){

        if(this.forma.invalid){
            return; 
          }

        localStorage.setItem('isLoggedin', 'true');

        console.log('valores', this.forma.value );  
        console.log('forma Completa', this.forma );
        console.log('Valido', this.forma.valid );
        console.log('controles',this.forma.controls)

        //redirecciona al Dashboard
        this.router.navigate(['/dashboard']);
    }
}