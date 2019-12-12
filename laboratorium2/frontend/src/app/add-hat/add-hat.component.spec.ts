import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHatComponent } from './add-hat.component';

describe('AddHatComponent', () => {
  let component: AddHatComponent;
  let fixture: ComponentFixture<AddHatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
