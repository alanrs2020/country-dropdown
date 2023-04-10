import { Component, ElementRef, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { NgxCountryDropdownService } from './ngx-country-dropdown.service';
import country from './countries.json';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { combineLatest } from 'rxjs';
@Component({
  selector: 'ngx-country-dropdown',
  templateUrl: './ngx-country-component.html',
  styleUrls: ['./style.css'],
  providers:[
      {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxCountryDropdownComponent),
      multi: true,
      }
  ]
})
export class NgxCountryDropdownComponent implements ControlValueAccessor{
  countries:any[] = country;
  public readonly country = new FormControl();
  @Input() defaultValue:string = "India";
  constructor(){}

  public ngOnInit(): void {
    combineLatest([
      this.country.valueChanges,
    ]).subscribe(() => {
      const value = this._getValue();
      this._onChange(value);
    });

    if(this.defaultValue != null){
      this.writeValue(this.defaultValue);
    }
  }

  /** Return a Date if the fields are ready or null otherwise */
  private _getValue(): string | null {
    try {
      if ( this.country.invalid)
        return null;
      return this.country.value;
    } catch {
      // Return null if something throws
      return null;
    }
  }

  public writeValue(value: string | null): void {
    
     if(value != null){
      this.country.setValue(value);
     }else{
      this.country.setValue(null);
     }
      
     
  }

  private _onChange = (_value: string | null): void => undefined;
  public registerOnChange(fn: (value: string | null) => void): void {
    this._onChange = fn;
  }

  /** It's called in the component template when we have a "blur" or "input" event */
  public onTouched = (): void => undefined;
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.country.disable();
    } else {
      this.country.enable();
    }
  }
}