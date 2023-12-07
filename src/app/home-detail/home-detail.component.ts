import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home-detail.component.html',
  styleUrl: './home-detail.component.css'
})
export class HomeDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  locationId: number = 0;

  location: HousingLocation | undefined;

  housingService = inject(HousingService);

  firstName: string = '';
  lastName: string = '';

  applicationForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor () {
    this.locationId = this.route.snapshot.params['id'];

    this.location = this.housingService.getAllHousingLocationsById(this.locationId);
  }

  submitForm() {
    this.firstName =
      this.applicationForm.value.firstName!;
    this.lastName =
      this.applicationForm.value.lastName!;
  }

}
