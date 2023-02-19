import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-intropage',
  templateUrl: './intropage.component.html',
  styleUrls: ['./intropage.component.scss']
})
export class IntropageComponent implements OnInit {
  public windowScrolled: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.windowScrolled = true;
  }

  ngOnInit(): void {
  }
}
