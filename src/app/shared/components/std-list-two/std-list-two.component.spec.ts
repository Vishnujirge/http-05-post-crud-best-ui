import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdListTwoComponent } from './std-list-two.component';

describe('StdListTwoComponent', () => {
  let component: StdListTwoComponent;
  let fixture: ComponentFixture<StdListTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdListTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdListTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
