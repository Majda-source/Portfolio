import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-intro',
  templateUrl: './top-intro.component.html',
  styleUrls: ['./top-intro.component.scss']
})
export class TopIntroComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

  }

  scrollToArea(id) {
    const container = document.getElementById(id);
    container?.scrollIntoView({
      behavior: 'smooth',
    });
  }
}


