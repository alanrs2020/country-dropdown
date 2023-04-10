import { NgModule } from '@angular/core';
import { NgxCountryDropdownComponent } from './ngx-country-dropdown.component';
import {MatInputModule} from '@angular/material/input'
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgxCountryDropdownComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports: [
    NgxCountryDropdownComponent,
    
  ],
})
export class NgxCountryDropdownModule { }
