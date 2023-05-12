import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
const routes: Routes = [ 
{ path: '', component:  SelectComponent},
{ path: 'app.component', component: AppComponent },
// { path: '', redirectTo: 'app.component:registerForm', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
