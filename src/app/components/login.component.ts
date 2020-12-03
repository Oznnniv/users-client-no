import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../services/user.service';
import { Login } from '../models/login';

@Component({
  selector: 'login',
  templateUrl: '../views/login.component.html',
  providers: [UserService]
  //styleUrls: ['./app.component.css']
})
export class LoginComponent {
	public user: Login;
	public menu: boolean;
	public errorMessage: any;

	constructor(
		private _userService:UserService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.menu = false;
		this.user = new Login('', '', '');
	}
	ngOnInit() {
	}
	public onSubmit(){
		if(this.user.typeOfUser == ''){
			return alert("Selecciona un tipo de usuario");
		}else if(this.user.email == '' || this.user.password == ''){
			return alert("Rellena todos los campos");
		}
		this._userService.singUp(this.user).subscribe(
			response => {
				//console.log(response);
				//this.rootCreation = false;
				//this.menu = true;x
				localStorage.setItem('email', JSON.stringify(this.user.email));
				this._router.navigate(['/login/token']);
			},
			error => {
				var errorMessage = <any> error;
				if(errorMessage != null){
					this.errorMessage = error.error.message;
					//console.log(error.error.message);
				}
			}
		)
	}
}
