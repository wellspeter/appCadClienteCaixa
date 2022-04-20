import { TestBed } from '@angular/core/testing';

import { ClientePfService } from './clientepf.service';

describe('ClientePfService', () => {
  let service: ClientePfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientePfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
