import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/components/error/error.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path: '', redirectTo: '/main/landing', pathMatch: 'full'},
  {path: 'account', loadChildren: () => import('./modules/account/account.module').then(m=>m.AccountModule)},
  {path: 'main', loadChildren: () => import('./modules/main/main.module').then(m=>m.MainModule)},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 