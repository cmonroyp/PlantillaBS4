import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'

//Arreglo de background de imagenes
import { CAMBIA_IMAGEN } from './../models/bg.images';
//model
import { Usuario } from '../models/usuario';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    forma: FormGroup;

    usuario: Usuario
    imagen:any[] =[];
    bgImages:any[] = CAMBIA_IMAGEN;

    sonIguales( campo1: string, campo2: string){

        return (group: FormGroup)=>{
    
          let pass1 = group.controls[campo1].value;
          let pass2 = group.controls[campo2].value;
    
          if(pass1 === pass2){
            return null //pasa la validacion
          }
          //error no pasa la validacion
          return {
            sonIguales: true
          }
        }
      }

    constructor() {}

    ngOnInit() {
        this.cambiaImage();
        this.validacionCampos();
    }

    validacionCampos(){

        this.forma = new FormGroup({
            nombre: new FormControl('',[Validators.required]),
            email: new FormControl('',[Validators.required, Validators.email]),
            pwd1: new FormControl('', [Validators.required]),
            pwd2: new FormControl('', [Validators.required])
        },
        { validators: this.sonIguales('pwd1','pwd2') }
        )
    }

    cambiaImage(){
        //se deja como arreglo por si se quiere, generar imagenes aleatorias como en el login.
        this.imagen = [
              ... this.imagen,{url: `${this.bgImages[4].nombre}`}
       ] 
     }

     singIn(){

        if(this.forma.invalid){
            return; 
          }

        console.log('valores', this.forma.value );  
        console.log('forma Completa', this.forma );
        console.log('Valido', this.forma.valid );
        console.log('controles',this.forma.controls)

        this.usuario = new Usuario(
            this.forma.value.nombre,
            this.forma.value.email,
            this.forma.value.pwd1
        )

        console.log('resultado',this.usuario)
     }
}