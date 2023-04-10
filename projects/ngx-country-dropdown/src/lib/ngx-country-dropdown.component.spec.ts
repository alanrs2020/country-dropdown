import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCountryDropdownComponent } from './ngx-country-dropdown.component';

describe('NgxCountryDropdownComponent', () => {
  let component: NgxCountryDropdownComponent;
  let fixture: ComponentFixture<NgxCountryDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCountryDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCountryDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
