import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CheatSheetComponent } from './cheat-sheet/cheat-sheet.component';
import { HomeComponent } from './home/home.component';
import { ReverseShellComponent } from './cheat-sheet/reverse-shell/reverse-shell.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cheat-sheet', component: CheatSheetComponent},
  {path: 'reverse-shell', component: ReverseShellComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CheatSheetComponent,
    HomeComponent,
    ReverseShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)],
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
