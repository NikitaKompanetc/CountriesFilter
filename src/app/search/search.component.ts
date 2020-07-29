import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { map } from "rxjs/operators"; 
import { filter } from "rxjs/operators"; 

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  constructor(private fb: FormBuilder, public service: DataService) { }

  ngOnInit() {
    // add corresponding validators
    this.searchForm = this.fb.group({
      'searchCountry': [null, Validators.required]
    });

    // write a function that calls changeCountryName upon value change in the form
    this.searchForm.valueChanges
      .pipe(map((value) => {
        value.searchCountry = value.searchCountry.trim();
        return value;
      }))
      .pipe(filter((value) => this.searchForm.valid))
      .subscribe((value) => {
        this.service.changeCountryName(value.searchCountry);
      })
  }

}
