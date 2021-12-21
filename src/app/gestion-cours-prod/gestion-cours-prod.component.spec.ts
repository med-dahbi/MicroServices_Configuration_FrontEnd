import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCoursProdComponent } from './gestion-cours-prod.component';

describe('GestionCoursProdComponent', () => {
  let component: GestionCoursProdComponent;
  let fixture: ComponentFixture<GestionCoursProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCoursProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCoursProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
