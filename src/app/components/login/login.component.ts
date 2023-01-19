import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
 
  username='';
  password='';

  ngOnInit(): void {
   
  }


  datos(){
    localStorage.setItem('nombre', this.username);
    localStorage.setItem('apellido', this.password);
   
  }
}
