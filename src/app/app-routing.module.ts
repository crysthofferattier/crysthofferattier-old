import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheatSheetComponent } from './cheat-sheet/cheat-sheet.component'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
