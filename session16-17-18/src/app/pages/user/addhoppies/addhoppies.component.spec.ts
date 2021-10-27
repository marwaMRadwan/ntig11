import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhoppiesComponent } from './addhoppies.component';

describe('AddhoppiesComponent', () => {
  let component: AddhoppiesComponent;
  let fixture: ComponentFixture<AddhoppiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhoppiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhoppiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
