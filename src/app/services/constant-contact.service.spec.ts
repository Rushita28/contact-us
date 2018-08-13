import { TestBed, inject } from '@angular/core/testing';

import { ConstantContactService } from './constant-contact.service';

describe('ConstantContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConstantContactService]
    });
  });

  it('should be created', inject([ConstantContactService], (service: ConstantContactService) => {
    expect(service).toBeTruthy();
  }));
});
