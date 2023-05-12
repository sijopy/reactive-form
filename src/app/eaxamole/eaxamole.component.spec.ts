import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaxamoleComponent } from './eaxamole.component';

describe('EaxamoleComponent', () => {
  let component: EaxamoleComponent;
  let fixture: ComponentFixture<EaxamoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaxamoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EaxamoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
