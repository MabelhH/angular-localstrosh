import { Component ,OnInit ,Input} from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  

  

  ngOnInit(): void {
    
  }

  agregardatos(usuario:string,contrasena:string){
    localStorage.setItem('name',usuario)
    localStorage.setItem('pass',contrasena)

    
  
  }
 
  
  
}
