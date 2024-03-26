import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseLocation } from '../house-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
   <section class="listing">
      <img class="listing-photo" [src]="housLocation.photo" alt="">
      <h2 class="listing-heading">{{housLocation.name}}</h2>
      <p class="listing-location">{{housLocation.state}},{{housLocation.city}}</p>
      <a [routerLink]="['/details', housLocation.id]">learn more</a>
   </section>
  `,
  styleUrls: ['./home-location.component.css']
})
export class HomeLocationComponent {
  @Input() housLocation!: HouseLocation;
}
