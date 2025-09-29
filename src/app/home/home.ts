import { CommonModule } from '@angular/common';
import { Component, DOCUMENT, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  baseHref: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    // This will get the <base href="..."> value from index.html
    this.baseHref = this.document.getElementsByTagName('base')[0]?.href || '/';
  }
}
