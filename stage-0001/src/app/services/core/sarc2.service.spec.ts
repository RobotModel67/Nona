import { TestBed } from '@angular/core/testing';

import { Sarc2Service } from './sarc2.service';

describe('Sarc2Service', () => {
  let service: Sarc2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sarc2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
