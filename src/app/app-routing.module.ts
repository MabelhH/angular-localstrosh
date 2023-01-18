import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { FormsGuard } from './guardia/forms.guard';

const routes: Routes = [
  {path:'',component:LoginComponent , canActivate:[FormsGuard]},
  {path:'post',component:PostComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
