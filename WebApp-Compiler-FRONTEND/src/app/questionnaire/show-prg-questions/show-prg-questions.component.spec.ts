import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPrgQuestionsComponent } from './show-prg-questions.component';

describe('ShowPrgQuestionsComponent', () => {
  let component: ShowPrgQuestionsComponent;
  let fixture: ComponentFixture<ShowPrgQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPrgQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPrgQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
