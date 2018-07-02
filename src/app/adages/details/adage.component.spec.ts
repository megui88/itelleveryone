import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdageComponent} from './adage.component';

describe('AdageComponent', () => {
  let component: AdageComponent;
  let fixture: ComponentFixture<AdageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
