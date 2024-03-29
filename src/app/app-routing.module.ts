import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'tontinards',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./tontinard/tontinard.module').then(m => m.TontinardModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: true,    // <-- trace router
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
