import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   private countryNameSource = new BehaviorSubject<string>("");
  currentCountryName = this.countryNameSource.asObservable();

  constructor() { }

changeCountryName(message: string) {
  this.countryNameSource.next(message);
}

getCountryName(): Observable<any> {
  return this.currentCountryName;
}
}
