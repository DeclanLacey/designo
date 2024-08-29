import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  burgerMenuOpen: boolean = false
  burgerMenuCheckboxValue: any

  ngOnInit(): void {
    this.burgerMenuCheckboxValue = document.getElementById("checkbox1")!
  }

  toggleBurgerMenu() {
    if (document.body.classList.contains("disable-scroll")){
      document.body.classList.remove("disable-scroll")
    }else {
      document.body.classList.add("disable-scroll")
    }

    
    this.burgerMenuOpen = !this.burgerMenuOpen
  }

  closeBurgerMenu() {
    this.burgerMenuCheckboxValue.checked = false
    this.burgerMenuOpen = !this.burgerMenuOpen
    document.body.classList.remove("disable-scroll")
  }
  
}
