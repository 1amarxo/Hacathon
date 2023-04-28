import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
  {path: '', redirectTo: '/account/login', pathMatch: 'full'},
  {path: 'account', loadChildren: () => import('./modules/account/account.module').then(m=>m.AccountModule)},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 