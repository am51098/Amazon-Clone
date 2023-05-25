import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { IsValidGuard } from 'src/app/shared/guards/is-valid.guard';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'log-in',
    canActivate: [IsValidGuard],
    component: LogInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
