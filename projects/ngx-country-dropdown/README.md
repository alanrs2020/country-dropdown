# NgxCountryDropdown

An Angular Material package for selecting country from list.

**Supports:**

- Angular 
- Angular Material 
- ReactiveFormsModule

## Images

![alt text](https://github.com/alanrs2020/ngx-country-dropdown/blob/master/images/image1.JPG)
![alt text](https://github.com/alanrs2020/ngx-country-dropdown/blob/master/images/image2.JPG)
![alt text](https://github.com/alanrs2020/ngx-country-dropdown/blob/master/images/image3.JPG)


## Installation

### Install This Library

```$ npm install ngx-country-dropdown --save```

## Usage

### Import

import {  NgxCountryDropdownModule } from "ngx-country-dropdown";

Add ```NgxCountryDropdownModule``` to your module file:

```javascript

imports: [
    NgxCountryDropdownModule,
  ]

```

## Example

Refer to test app in this repository for working example.

```html

<form action="" [formGroup]="testForm" (submit)="onSubmit()">
    <ngx-country-dropdown defaultValue="India" formControlName="country"></ngx-country-dropdown>
    <input class="btn" type="submit" value="Show">
</form>

<p> {{ selectedCountry}} </p>

```

## Options

| Options                       | Type                   | Default            | Description                                                                         |
| ------------------------------|------------------------|--------------------|-------------------------------------------------------------------------------------|
| defaultValue                  | ```string```           | ```""```           | Default country value.                                                              |


## Library Contributions

- Fork repo.
- Go to ```./projects/ngx-country-dropdown```
- Update ```./src/lib``` with new functionality.
- Update README.md
- Pull request.


### keywords

 angular npm countrylist dropdown input 