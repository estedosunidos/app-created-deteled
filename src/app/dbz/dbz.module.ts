import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { List2Component } from './components/list2/list2.component';
import { AddcharacterComponent } from './components/list2/addcharacter/addcharacter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule

  ],
  declarations: [MainPageComponent,List2Component,AddcharacterComponent],
  exports: [MainPageComponent]
})
export class DbzModule { }
