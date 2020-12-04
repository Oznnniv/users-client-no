import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import{ AppComponent } from './app.component';
import{ WelcomeComponent } from './components/welcome.component';
import{ RootCreationComponent } from './components/root-creation.component';
import{ UsersCreationComponent } from './components/users-creation.component';
import{ UsersUpdateComponent } from './components/users-update.component';
import{ UsersDeleteComponent } from './components/users-delete.component';
import{ RootMenuComponent } from './components/root-menu.component';
import{ LoginComponent } from './components/login.component';
import{ TokenComponent } from './components/token.component';


const routes: Routes = [
	{path: '', component: WelcomeComponent}, //ruta /
	{path: 'rootCreation', component: RootCreationComponent}, //ruta /rootCreation
	{path: 'userCreation', component: UsersCreationComponent}, //ruta /rootCreation
	{path: 'userUpdate/:id', component: UsersUpdateComponent}, //ruta /rootCreation
	{path: 'userDelete/:id', component: UsersDeleteComponent}, //ruta /rootCreation
	{path: 'menu', component: RootMenuComponent}, //ruta /menu
	{path: 'login', component: LoginComponent}, //ruta login
	{path: 'login/token', component: TokenComponent}, //ruta /menu
	{path: '**', component: WelcomeComponent}, //Cuando no hay nada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
