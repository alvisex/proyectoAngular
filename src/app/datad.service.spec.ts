import { TestBed, inject } from '@angular/core/testing';

import { DatadService } from './datad.service';

describe('DatadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatadService]
    });
  });

  it('should be created', inject([DatadService], (service: DatadService) => {
    expect(service).toBeTruthy();
  }));
});
