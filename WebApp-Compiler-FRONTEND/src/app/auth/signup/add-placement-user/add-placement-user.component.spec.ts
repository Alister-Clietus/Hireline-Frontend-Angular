import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlacementUserComponent } from './add-placement-user.component';

describe('AddPlacementUserComponent', () => {
  let component: AddPlacementUserComponent;
  let fixture: ComponentFixture<AddPlacementUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlacementUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlacementUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
