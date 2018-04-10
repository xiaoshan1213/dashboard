import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatRadioModule, MatInputModule, MatMenuModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routes';
import { RootComponent } from './dashboard/root/root.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { DialComponent } from './dashboard/dial/dial.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RootComponent,
    SidebarComponent,
    DialComponent
  ],
  imports: [
    BrowserModule,
    routing,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
