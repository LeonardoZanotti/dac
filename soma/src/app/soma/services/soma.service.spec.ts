import { TestBed } from '@angular/core/testing';

import { SomaService } from './soma.service';

describe('SomaService', () => {
  let service: SomaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
