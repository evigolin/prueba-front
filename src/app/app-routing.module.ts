import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CirclesComponent } from './_components/circles/circles.component';
import { EspiralComponent } from './_components/espiral/espiral.component';
import { PrimesComponent } from './_components/primes/primes.component';
import { AuthGuard } from './_helpers/auth.guard';
import { NavigateGuard } from './_helpers/navigate.guard';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'spiral',
    component: EspiralComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'primes',
    component: PrimesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'circles',
    component: CirclesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'account',
    loadChildren: accountModule,
    canLoad: [NavigateGuard]
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
