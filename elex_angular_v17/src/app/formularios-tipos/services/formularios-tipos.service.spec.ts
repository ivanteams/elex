import { TestBed } from '@angular/core/testing';

import { FormulariosTiposService } from './formularios-tipos.service';

describe('FormulariosTiposService', () => {
  let service: FormulariosTiposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormulariosTiposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
