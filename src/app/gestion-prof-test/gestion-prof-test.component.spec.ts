import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfTestComponent } from './gestion-prof-test.component';

describe('GestionProfTestComponent', () => {
  let component: GestionProfTestComponent;
  let fixture: ComponentFixture<GestionProfTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProfTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProfTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
