import { Component } from '@angular/core';
import { LocationCardComponent } from "../location-card/location-card.component";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [LocationCardComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
