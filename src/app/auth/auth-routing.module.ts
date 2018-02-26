import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterStep1Module } from './register-step-1/register-step-1.module';

const routes: Routes = [
  {
    path: 'register-step-1',
    loadChildren: './register-step-1/register-step-1.module#RegisterStep1Module'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
