import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact-link-card',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './contact-link-card.component.html',
  styleUrl: './contact-link-card.component.css'
})
export class ContactLinkCardComponent {

}
