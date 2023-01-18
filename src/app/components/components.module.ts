import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { FornularioComponent } from './fornulario/fornulario.component';




@NgModule({
  declarations: [
    LoginComponent,
    PostComponent,
    FornularioComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  exports:[
    LoginComponent,
    PostComponent,
    FornularioComponent
    
  ]
})
export class ComponentsModule { }
