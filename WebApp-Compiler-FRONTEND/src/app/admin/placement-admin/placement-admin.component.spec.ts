import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementAdminComponent } from './placement-admin.component';

describe('PlacementAdminComponent', () => {
  let component: PlacementAdminComponent;
  let fixture: ComponentFixture<PlacementAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
