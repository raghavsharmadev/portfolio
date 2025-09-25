import { Component, HostListener } from '@angular/core';
import { Home } from "../home/home";
import { About } from "../about/about";
import { Skills } from "../skills/skills";
import { Experience } from "../experience/experience";
import { Education } from "../education/education";
import { Portfolio } from "../portfolio/portfolio";
import { Contact } from "../contact/contact";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [Home, About, Skills, Experience, Education, Portfolio, Contact, CommonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  isFixed:boolean = false;

  @HostListener('window:scroll', [])
  checkScroll() {
    if(window.pageYOffset >= 735) {
      this.isFixed = true;
    }
    else {
      this.isFixed = false;
    }
  }
}
