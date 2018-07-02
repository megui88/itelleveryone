import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdagesComponent } from './adages.component';

describe('AdagesComponent', () => {
  let component: AdagesComponent;
  let fixture: ComponentFixture<AdagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
