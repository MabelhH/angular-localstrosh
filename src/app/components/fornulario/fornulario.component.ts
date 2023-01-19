import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-fornulario',
  templateUrl: './fornulario.component.html',
  styleUrls: ['./fornulario.component.css']
})
export class FornularioComponent implements OnInit {

  

 datosformulario(nombre:string,apellido:string,password:string,email:string,telefono:string){
    localStorage.setItem('name',nombre)
    localStorage.setItem('lastname',apellido)
    localStorage.setItem('pass',password)
    localStorage.setItem('ema',email)
    localStorage.setItem('cel',telefono)
  }
  
  
  
  public formLogin!: FormGroup;
   correo!:string;

   constructor(private formBuilder:FormBuilder){

   }

     ngOnInit(): void {

    this.formLogin = this.formBuilder.group({
      nombre:['',
        [
         Validators.required,
         Validators.minLength(6)
       ]
       ],
      apellido:['',
         [
        Validators.required,
        Validators.minLength(6)
        ]
       ],
       email:['', 
        [
           Validators.required,
           Validators.email
         ]
       ],
      password:['', 
        [
         Validators.required,
       Validators.minLength(8)
         ]
          ],
        telefono:['',
         [
           Validators.required,
          Validators.maxLength(8)
         ]
       ]
     })

     this.loadAPI()
   }

   //function para simular la carga de un API
   loadAPI():any{
    const response = {
       nombre: 'clara isabel',
       apellido: 'hunaco huamani',
       email: 'clarhuanaco23@gmail.com',
       password: 'licenciafrom',
      telefono:'98563247'
     };

   this.formLogin.patchValue(response);
    
    
   }


   send(): any{
     console.log(this.formLogin.value)
   }
 
  
}
