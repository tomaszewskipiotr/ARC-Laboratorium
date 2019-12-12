import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHatComponent } from './show-hat.component';

describe('ShowHatComponent', () => {
  let component: ShowHatComponent;
  let fixture: ComponentFixture<ShowHatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
