import { TestBed } from '@angular/core/testing';

import { TrabajosServiceService } from './trabajos-service.service';

describe('TrabajosServiceService', () => {
  let service: TrabajosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrabajosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
