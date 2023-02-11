import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopIntroComponent } from './top-intro.component';

describe('TopIntroComponent', () => {
  let component: TopIntroComponent;
  let fixture: ComponentFixture<TopIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
