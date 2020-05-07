import { TestBed } from '@angular/core/testing';

import { DatatransferbetweencomponentsService } from './datatransferbetweencomponents.service';

describe('DatatransferbetweencomponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatatransferbetweencomponentsService = TestBed.get(DatatransferbetweencomponentsService);
    expect(service).toBeTruthy();
  });
});
