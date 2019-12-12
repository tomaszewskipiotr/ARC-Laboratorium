import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HatService} from '../model/service/hat.service';
import {Hat} from '../model/classes/hat';

@Component({
  selector: 'app-add-hat',
  templateUrl: './add-hat.component.html',
  styleUrls: ['./add-hat.component.css']
})
export class AddHatComponent implements OnInit {
  hatForm = this.fb.group({
    company: [''],
    material: [''],
    price: [''],
    type: [''],
    size: ['']
  });

  constructor(private fb: FormBuilder, private hatService: HatService) { }

  sendHat() {
      this.hatService.sendHat(new Hat(
          this.hatForm.value.company,
          this.hatForm.value.material,
          this.hatForm.value.price,
          this.hatForm.value.type,
          this.hatForm.value.size)).subscribe(response => {
              console.log(response);
      });
  }
  ngOnInit() {
  }

}
