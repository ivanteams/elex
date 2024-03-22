import { TestBed } from '@angular/core/testing';

import { TiposExpedienteService } from './tipos-expediente.service';

describe('TiposExpedienteService', () => {
  let service: TiposExpedienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposExpedienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
