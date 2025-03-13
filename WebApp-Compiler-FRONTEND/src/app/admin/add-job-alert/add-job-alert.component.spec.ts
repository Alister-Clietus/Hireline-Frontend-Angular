import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobAlertComponent } from './add-job-alert.component';

describe('AddJobAlertComponent', () => {
  let component: AddJobAlertComponent;
  let fixture: ComponentFixture<AddJobAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
