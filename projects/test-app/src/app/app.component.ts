import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxCountryDropdownComponent } from 'ngx-country-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testApp';
  testForm!:FormGroup;
  selectedCountry!:string;
  countries!:any[]

  constructor(){}
  ngOnInit(){
    this.testForm = new FormGroup({
      name:new FormControl('name'),
      country:new FormControl('India')
    })


  }

  onSubmit(){
    this.selectedCountry = this.testForm.get('country')?.value;
  }
}
