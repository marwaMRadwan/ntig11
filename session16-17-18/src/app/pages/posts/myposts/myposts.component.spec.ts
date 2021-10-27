import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypostsComponent } from './myposts.component';

describe('MypostsComponent', () => {
  let component: MypostsComponent;
  let fixture: ComponentFixture<MypostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
