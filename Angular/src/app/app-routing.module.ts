import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingUpComponent } from './sing-up/sing-up.component';
import { AppComponent } from './app.component';
import { SingInComponent } from './sing-in/sing-in.component';


const routes: Routes = [
  {path: 'singup' , component: SingUpComponent},
  {path: 'singin', component: SingInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
