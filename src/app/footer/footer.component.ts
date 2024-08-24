import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ContactLinkCardComponent } from "../contact-link-card/contact-link-card.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, ContactLinkCardComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent{
 
}
