import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome.component';
import { RootCreationComponent } from './components/root-creation.component';
import { UsersCreationComponent } from './components/users-creation.component';
import { RootMenuComponent } from './components/root-menu.component';
import { LoginComponent } from './components/login.component';
import { TokenComponent } from './components/token.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RootCreationComponent,
    UsersCreationComponent,
    RootMenuComponent,
    LoginComponent,
    TokenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
