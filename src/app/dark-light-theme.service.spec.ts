import { TestBed } from '@angular/core/testing';

import { DarkLightThemeService } from './dark-light-theme.service';

describe('DarkLightThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DarkLightThemeService = TestBed.get(DarkLightThemeService);
    expect(service).toBeTruthy();
  });
});
