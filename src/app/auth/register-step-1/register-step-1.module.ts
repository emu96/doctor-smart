import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterStep1Component } from './register-step-1.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterStep1Component
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class RegisterStep1Module { }
