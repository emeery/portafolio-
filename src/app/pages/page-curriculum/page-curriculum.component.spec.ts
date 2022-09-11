import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCurriculumComponent } from './page-curriculum.component';

describe('PageCurriculumComponent', () => {
  let component: PageCurriculumComponent;
  let fixture: ComponentFixture<PageCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCurriculumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
