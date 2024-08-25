import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-design-page',
  standalone: true,
  imports: [],
  templateUrl: './design-page.component.html',
  styleUrl: './design-page.component.css'
})
export class DesignPageComponent {

  constructor(private activatedRoute: ActivatedRoute) {
    const data: Data = this.activatedRoute.snapshot.data

  }

}
