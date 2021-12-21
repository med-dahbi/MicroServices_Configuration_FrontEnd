import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCoursDevComponent } from './gestion-cours-dev.component';

describe('GestionCoursDevComponent', () => {
  let component: GestionCoursDevComponent;
  let fixture: ComponentFixture<GestionCoursDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCoursDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCoursDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
