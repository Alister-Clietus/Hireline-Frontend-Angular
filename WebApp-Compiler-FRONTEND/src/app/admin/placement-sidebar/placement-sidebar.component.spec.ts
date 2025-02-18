import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementSidebarComponent } from './placement-sidebar.component';

describe('PlacementSidebarComponent', () => {
  let component: PlacementSidebarComponent;
  let fixture: ComponentFixture<PlacementSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
