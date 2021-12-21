import { TestBed } from '@angular/core/testing';

import { GestionCoursService } from './gestion-cours.service';

describe('GestionCoursService', () => {
  let service: GestionCoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionCoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
