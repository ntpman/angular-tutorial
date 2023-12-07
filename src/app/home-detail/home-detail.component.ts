import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-detail',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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
  email: string = '';
  errorMsg: string = '';

  applicationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
  });

  constructor () {
    this.locationId = this.route.snapshot.params['id'];

    this.location = this.housingService.getAllHousingLocationsById(this.locationId);
  }

  submitForm() {
    if(this.applicationForm.valid) {
      this.firstName =
        this.applicationForm.value.firstName!;
      this.lastName =
        this.applicationForm.value.lastName!;
      this.email =
        this.applicationForm.value.email!;
    } else {
      this.errorMsg = 'Form validation failed';
    }
  }

}
