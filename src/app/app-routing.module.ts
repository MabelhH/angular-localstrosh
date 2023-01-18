import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornularioComponent } from './components/fornulario/fornulario.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { FormsGuard } from './guardia/forms.guard';
import { PermisoGuard } from './guardia/permiso.guard';
import { Permiso02Guard } from './guardia/permiso02.guard';

const routes: Routes = [
  {path:'',component:LoginComponent , canActivate:[FormsGuard]},
  {path:'post',component:PostComponent, canDeactivate:[PermisoGuard]},
  {path:'formulario',component:FornularioComponent , canActivate:[Permiso02Guard]},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
