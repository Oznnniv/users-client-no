import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

import { UserService } from '../services/user.service';
import { Users } from '../models/users';

@Component({
  selector: 'root-creation',
  templateUrl: '../views/root-creation.component.html',
  providers: [UserService]
  //styleUrls: ['./app.component.css']
})
export class RootCreationComponent {
	public isHidden: boolean;
	public user: Users;
	public errorMessage: any;
	public registerOk: any;

	constructor(
		private _userService:UserService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.isHidden = true;
		this.user = new Users('', '', 'initialToken', 'create', 'createRoot', '0xeA2A4D2c8E195efAff764DFfCd5936EA7dB88Ef9', 'hashX', 'Root', true, true, true, true, true, true, true, true, true, true, true, true);
		//this.user = new Users('email', 'password', 'initialToken', 'typeOfOperation', 'nameOfOperation', 'addressU', 'hashX', 'typeOfUser', 'dp1', 'dp2', 'dp3', 'dp4', 'dp5', 'dp6', 'dp7', 'dp8', 'dp9', 'dp10', 'dp11', 'dp12');
	}

	ngOnInit() {
	}

	public onSubmit(){
		if(this.user.email == '' || this.user.password == ''){
			return alert("Rellena los campos");
		}
		var jsonDP = '{ "createAdministrator": '+this.user.dp1+', "createTUser": '+this.user.dp2+', "updateMe": '+this.user.dp3+', "updateAdministrator": '+this.user.dp4+', "updateTUser": '+this.user.dp5+', "deleteMe": '+this.user.dp6+', "deleteAdministrator": '+this.user.dp7+', "deleteTUser": '+this.user.dp8+', "readMe": '+this.user.dp9+', "readAdministrator": '+this.user.dp10+', "readTUser": '+this.user.dp11+', "loginUser": '+this.user.dp12+' }';
		var jsonData = {
			email: this.user.email,
			password: this.user.password,
			typeOfUser: this.user.typeOfUser,
			initialToken: this.user.initialToken,
			typeOfOperation: this.user.typeOfOperation,
			nameOfOperation: this.user.nameOfOperation,
			addressU: this.user.addressU,
			hashX: this.user.hashX,
			dp: jsonDP
		};
		var md5 = new Md5();
		var f = md5.appendStr(JSON.stringify(jsonData)).end();
		console.log(f);
		 //CHECAR EL MD5 PARA DESPUÉS

		this._userService.createRoot(jsonData).subscribe(
			response => {
				//console.log(response.message);
				//this.rootCreation = false;
				//this.menu = true;
				this._router.navigate(['/menu']);
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
