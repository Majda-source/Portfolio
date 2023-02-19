import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills = [
    { name: 'Javascript', icon: 'Javascript.png' },
    { name: 'Angular', icon: 'Angular.png' },
    { name: 'Typescript', icon: 'typescript.png' },
    { name: 'HTML', icon: 'html.png' },
    { name: 'GIT', icon: 'git.png' },
    { name: 'Firebase', icon: 'Firebase.png' },
    { name: 'CSS', icon: 'css.png' },
    { name: 'Scrum', icon: 'scrum.png' },
    { name: 'Rest-Api', icon: 'api.png' },
    { name: 'Material design', icon: 'materialdesign.png' }
  ];

  

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    target.classList.add('animate');
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    target.classList.remove('animate');
  }

}
