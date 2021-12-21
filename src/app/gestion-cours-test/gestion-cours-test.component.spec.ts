import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCoursTestComponent } from './gestion-cours-test.component';

describe('GestionCoursTestComponent', () => {
  let component: GestionCoursTestComponent;
  let fixture: ComponentFixture<GestionCoursTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCoursTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCoursTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
