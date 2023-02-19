import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  lampOff = 'assets/img/lampOff.png';
  lampOn = 'assets/img/lampOn.png';
  puzzleOff = 'assets/img/puzzleOff.png';
  puzzleOn = 'assets/img/puzzleOn.png';

  lampSrc = this.lampOff;
  puzzleSrc = this.puzzleOff;
 
  toggleLamp() {
    this.lampSrc = this.lampSrc === this.lampOff ? this.lampOn : this.lampOff;
  }

  togglePuzzle() {
    this.puzzleSrc = this.puzzleSrc === this.puzzleOff ? this.puzzleOn : this.puzzleOff;
  }
}
