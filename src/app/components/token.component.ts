import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';


import { Token } from '../models/token';

@Component({
  selector: 'token',
  templateUrl: '../views/token.component.html',
  providers: [UserService]
  //styleUrls: ['./app.component.css']
})
export class TokenComponent {
	public isHidden: boolean;
	public token: Token;
	public errorMessage: any;
	public email: string;

	constructor(
		private _userService:UserService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.isHidden = true;
		this.email = JSON.parse(this._userService.getIdentity());
		this.token = new Token('', this.email.email.replace(/['"]+/g, ''), 'authentication', 'loginUser');
	}

	ngOnInit() {
	}
	public onSubmit(){
		var newtoken = this.token.token.replace(/['"]+/g, '');
		var jsonData = {
			token: newtoken,
			email: this.token.email,
			typeOfOperation: this.token.typeOfOperation,
			nameOfOperation: this.token.nameOfOperation
		}
		console.log(jsonData);
		this._userService.checkToken(jsonData).subscribe(
			response => {
				//console.log(response.message);
				//this.rootCreation = false;
				//this.menu = true;
				//Guardar el token en el localStorage
				localStorage.setItem('token', JSON.stringify(newtoken));
				//console.log(this.token.token);
				this._router.navigate(['/menu']);
			},
			error => {
				var errorMessage = <any> error;
				if(errorMessage != null){
					//console.log(error.error.message);
					this.errorMessage = error.error.message;
					if(this.errorMessage == null){
						this.errorMessage = "Token o email incorrectos";
					}else if(this.errorMessage == false){
						this.errorMessage = "No tienes permisos para ingresar al sistema";
					}
				}
			}
		)
	}
}
