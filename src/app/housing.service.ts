import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  housingLocations: HousingLocation[] = [
    {id: 0, name: 'กทม', wifi: true, tel: '02-201-7516'},
    {id: 1, name: 'ชลบุรี', wifi: false, tel: '02-201-7515'},
    {id: 2, name: 'ราชบุรี', wifi: true, tel: '02-201-7514'},
  ];

  constructor() { }

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocations;
  }

  getAllHousingLocationsById(id: number): HousingLocation {
    return this.housingLocations[id];
  }
}
