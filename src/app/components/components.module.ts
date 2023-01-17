import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { PostsTableComponent } from './posts-table/posts-table.component';
import { MaterialModule } from '../material/material.module';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    HeroComponent,
    PostsTableComponent,
    SpinnerComponent
  ],
  exports: [
    HeroComponent,
    PostsTableComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
