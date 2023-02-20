import { Component} from '@angular/core';
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

  showDiv: boolean = false;
 
  onScroll(event: any) {
    const div = document.querySelector('.projects') as HTMLElement;
    const divHeight = div.offsetHeight;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition >= div.offsetTop + divHeight * 0.1 && !this.showDiv) {
      this.showDiv = true;
    }
  
  
  
  }

 


  
  

  
  public projects: Project[] = [
    {
      title: 'Join Project',
      description: 'This is a lorem lorem ispusm lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum  .',
      technologies: 'javascript, HTML, CSS',
      imageSrc: 'assets/img/myWork/join.png',
      githubUrl: 'https://github.com/',
      liveTestUrl: 'https://',
      showDetails: false
    },
    {
      title: 'crm Project',
      description: 'This is a project  lorem lorem ispusm lorem ipsum lorem ipsumlorem ipsumlorem ipsu',
      technologies: 'Angular, Firebase',
      imageSrc: 'assets/img/myWork/crm.png',
      githubUrl: 'https://github.com/',
      liveTestUrl: 'https://',
      showDetails: false
    },
    {
      title: 'Poco Loco Project',
      description: 'This is a project  lorem lorem ispusm lorem ipsum lorem ipsumlorem ipsumlorem ipsu',
      technologies: 'Javascript, HTML, CSS',
      imageSrc: 'assets/img/myWork/pocoloco.png',
      githubUrl: 'https://github.com/',
      liveTestUrl: 'https://',
      showDetails: false
    },
    {
      title: 'Pokedex Project',
      description: 'This is a project that lorem lorem ispusm lorem ipsum lorem ipsumlorem ipsumlorem ipsu.',
      technologies: 'Javascript, HTML, CSS Rest Api',
      imageSrc: 'assets/img/myWork/pokedex.png',
      githubUrl: 'https://github.com/',
      liveTestUrl: 'https://',
      showDetails: false
    }
  ];

}
