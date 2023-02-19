import { Component } from '@angular/core';
import { fadeInRightAnimation } from './../animations/animations';

interface Project {
  title: string;
  description: string;
  technologies: string;
  imageSrc: string;
  githubUrl: string;
  liveTestUrl: string;
  showDetails: boolean;
}
@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
  animations: [fadeInRightAnimation]
})
export class MyWorkComponent {

  fadeInRight = false;

  
  public projects: Project[] = [
    {
      title: 'Join Project',
      description: 'This is a game project that I worked on. It was a lot of fun and I learned a lot while building it.',
      technologies: 'Angular, Phaser, Firebase',
      imageSrc: 'assets/img/myWork/join.png',
      githubUrl: 'https://github.com/yourusername/game',
      liveTestUrl: 'https://game.yourdomain.com',
      showDetails: false
    },
    {
      title: 'crm Project',
      description: 'This is a project that I worked on that allows users to join and participate in groups.',
      technologies: 'Angular, Firebase, Bootstrap',
      imageSrc: 'assets/img/myWork/crm.png',
      githubUrl: 'https://github.com/yourusername/join',
      liveTestUrl: 'https://join.yourdomain.com',
      showDetails: false
    },
    {
      title: 'Loco Project',
      description: 'This is a project that I worked on that helps people find local restaurants.',
      technologies: 'Angular, Firebase, Google Maps',
      imageSrc: 'assets/img/myWork/pocoloco.png',
      githubUrl: 'https://github.com/yourusername/loco',
      liveTestUrl: 'https://loco.yourdomain.com',
      showDetails: false
    },
    {
      title: 'Lila Project',
      description: 'This is a project that I worked on that helps people learn new languages.',
      technologies: 'Angular, Firebase, Web Speech API',
      imageSrc: 'assets/img/myWork/pocoloco.png',
      githubUrl: 'https://github.com/yourusername/lila',
      liveTestUrl: 'https://lila.yourdomain.com',
      showDetails: false
    }
  ];

}
