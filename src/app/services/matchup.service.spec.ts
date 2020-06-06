import { TestBed } from '@angular/core/testing';

import { MatchupService } from './matchup.service';

describe('MatchupService', () => {
  let service: MatchupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
