import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'root-menu',
  templateUrl: '../views/root-menu.component.html',
  styleUrls: ['../../assets/argon/css/argon-design-system.css']
})
export class RootMenuComponent {
	public UserCreation: boolean;
	constructor(){
		this.UserCreation = false;
	}

	ngOnInit() {
	}
	OnSubmit(){
		this.UserCreation = true;
	}
}
