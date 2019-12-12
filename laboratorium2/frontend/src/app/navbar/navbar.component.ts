import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    public componentNumber: number;

    constructor() {
    }

    ngOnInit() {
    }

    logOut() {

    }

    toggle(componentNumber: number) {
        this.componentNumber = componentNumber;
    }

}
