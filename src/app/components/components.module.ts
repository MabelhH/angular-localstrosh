import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { FornularioComponent } from './fornulario/fornulario.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    LoginComponent,
    PostComponent,
    FornularioComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule
    
    
  ],
  exports:[
    LoginComponent,
    PostComponent,
    FornularioComponent
    
  ]
})
export class ComponentsModule { }
