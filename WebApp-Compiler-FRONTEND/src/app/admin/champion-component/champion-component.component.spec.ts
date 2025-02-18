import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionComponentComponent } from './champion-component.component';

describe('ChampionComponentComponent', () => {
  let component: ChampionComponentComponent;
  let fixture: ComponentFixture<ChampionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
