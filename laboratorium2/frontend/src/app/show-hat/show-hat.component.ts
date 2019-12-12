import {Component, OnInit} from '@angular/core';
import {Hat} from '../model/classes/hat';
import {HatService} from '../model/service/hat.service';

@Component({
    selector: 'app-show-hat',
    templateUrl: './show-hat.component.html',
    styleUrls: ['./show-hat.component.css']
})
export class ShowHatComponent implements OnInit {
    products: Hat[];

    constructor(private hatService: HatService) {
    }

    ngOnInit() {
        this.hatService.getAllHats().subscribe( data => {
            this.products = data;
        });
    }
}
