import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwnUpldComponent } from './dwn-upld.component';

describe('DwnUpldComponent', () => {
  let component: DwnUpldComponent;
  let fixture: ComponentFixture<DwnUpldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwnUpldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwnUpldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
