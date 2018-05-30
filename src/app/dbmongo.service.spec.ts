import { TestBed, inject } from '@angular/core/testing';

import { DbmongoService } from './dbmongo.service';

describe('DbmongoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbmongoService]
    });
  });

  it('should be created', inject([DbmongoService], (service: DbmongoService) => {
    expect(service).toBeTruthy();
  }));
});
