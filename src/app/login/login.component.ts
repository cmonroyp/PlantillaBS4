import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';


import { CAMBIA_IMAGEN } from './../models/bg.images';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    imagen:any[] =[];
    bgImages:any[] = CAMBIA_IMAGEN;

    constructor(public router: Router) {
    }

    ngOnInit() {
        let  img =  Math.floor(Math.random() * 7) + 1
        this.cambiaImage(img)
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
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
}