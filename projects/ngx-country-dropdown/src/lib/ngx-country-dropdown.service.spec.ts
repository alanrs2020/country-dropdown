import { TestBed } from '@angular/core/testing';

import { NgxCountryDropdownService } from './ngx-country-dropdown.service';

describe('NgxCountryDropdownService', () => {
  let service: NgxCountryDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCountryDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
