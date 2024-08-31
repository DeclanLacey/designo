import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, RouterLink, RouterLinkActive } from '@angular/router';
import webDesignData from "../data/web-design-data.json"
import appDesignData from "../data/app-design-data.json"
import graphicDesignData from "../data/graphic-design-data.json"
import { DesignCardComponent } from "../design-card/design-card.component";

@Component({
  selector: 'app-design-page',
  standalone: true,
  imports: [CommonModule, DesignCardComponent, RouterLinkActive, RouterLink],
  templateUrl: './design-page.component.html',
  styleUrl: './design-page.component.css'
})
export class DesignPageComponent implements OnInit {

  data : any[] | undefined
  titleData: any

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.data.subscribe((data) => {
        this.titleData = data
        if (data[0] === "Web Design") {
          this.data = webDesignData
        }else if (data[0] === "App Design") {
          this.data = appDesignData
        }else if (data[0] === "Graphic Design") {
          this.data = graphicDesignData
        }
      })

      console.log(this.data)
  }

}
