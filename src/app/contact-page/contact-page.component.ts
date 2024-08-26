import { Component } from '@angular/core';
import { LocationCardComponent } from "../location-card/location-card.component";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [LocationCardComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

}
