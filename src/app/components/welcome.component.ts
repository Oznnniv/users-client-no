import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'welcome',
  templateUrl: '../views/welcome.component.html',

  //styleUrls: ['../assets/js/jquery.min.js', '../assets/bootstrap/css/bootstrap.min.css']
})
export class WelcomeComponent implements OnInit {
	//public next: boolean;
	//public rootCreation: boolean;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	){
		//this.next = true;
		//this.rootCreation = false;
	}

	ngOnInit() {
	}

	public onNext(){
		//this.next = false;
		//this.rootCreation = true;
		this._router.navigate(['/rootCreation']);
	}
}
