import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { AccountMenuComponent } from './components/account-menu/account-menu.component';



@NgModule({
  declarations: [
    ErrorComponent,
    HeaderComponent,
    AccountMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class SharedModule { }
