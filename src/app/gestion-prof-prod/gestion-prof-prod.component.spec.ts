import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfProdComponent } from './gestion-prof-prod.component';

describe('GestionProfProdComponent', () => {
  let component: GestionProfProdComponent;
  let fixture: ComponentFixture<GestionProfProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProfProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProfProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
