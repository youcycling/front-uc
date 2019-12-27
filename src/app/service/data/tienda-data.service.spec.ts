import { TestBed } from '@angular/core/testing';

import { TiendaDataService } from './tienda-data.service';

describe('TiendaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TiendaDataService = TestBed.get(TiendaDataService);
    expect(service).toBeTruthy();
  });
});
