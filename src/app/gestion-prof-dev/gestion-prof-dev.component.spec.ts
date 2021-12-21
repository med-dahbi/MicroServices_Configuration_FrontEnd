import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfDevComponent } from './gestion-prof-dev.component';

describe('GestionProfDevComponent', () => {
  let component: GestionProfDevComponent;
  let fixture: ComponentFixture<GestionProfDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProfDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProfDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
