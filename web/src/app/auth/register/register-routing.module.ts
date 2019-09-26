import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
