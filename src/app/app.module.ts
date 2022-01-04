import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CheatSheetComponent } from './cheat-sheet/cheat-sheet.component';
import { HomeComponent } from './home/home.component';
import { ReverseShellComponent } from './cheat-sheet/reverse-shell/reverse-shell.component';
import { TtyShellComponent } from './cheat-sheet/tty-shell/tty-shell.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cheat-sheet', component: CheatSheetComponent },
  { path: 'reverse-shell', component: ReverseShellComponent },
  { path: 'tty-shell', component: TtyShellComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CheatSheetComponent,
    HomeComponent,
    ReverseShellComponent,
    TtyShellComponent
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
