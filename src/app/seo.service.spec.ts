import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SeoService, Meta, Title] });
    service = TestBed.inject(SeoService);
  });

  afterEach(() => {
    document.getElementById('structured-data')?.remove();
    document.head.querySelector('link[rel="canonical"]')?.remove();
  });

  it('creates canonical, social and structured metadata for the home page', () => {
    service.setHomeMetadata();

    expect(document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href).toBe('https://henriquerod.com/');
    expect(document.head.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.content).toContain('Henrique Rodrigues');
    expect(document.getElementById('structured-data')?.textContent).toContain('ProfilePage');
  });
});
