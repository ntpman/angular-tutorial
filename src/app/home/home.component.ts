import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingService = inject(HousingService);
  getAllHousingLocations: HousingLocation[];

  searchForm = new FormGroup({
    queryString: new FormControl(''),
  });

  search() {
    this.getAllHousingLocations = this.housingService.getHousingLocationByName(
      this.searchForm.value.queryString!);
    console.log(this.searchForm.value);
  }

  constructor() {
    this.getAllHousingLocations = this.housingService.getAllHousingLocations();
  }
}
