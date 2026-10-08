import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { controleAki } from './data/projects/controleaki';
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

    const expectedTitle = 'Henrique Rodrigues | Senior Software Engineer';
    const expectedDescription = 'Senior Software Engineer building scalable cloud products with Angular/React, Node.js and AWS for regulated and high-traffic systems.';
    const structuredData = JSON.parse(document.getElementById('structured-data')?.textContent || '{}');

    expect(document.title).toBe(expectedTitle);
    expect(document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href).toBe('https://henriquerod.com/');
    expect(document.head.querySelector<HTMLMetaElement>('meta[name="description"]')?.content).toBe(expectedDescription);
    expect(document.head.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.content).toBe(expectedTitle);
    expect(document.head.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.content).toBe(expectedDescription);
    expect(document.head.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.content).toBe(expectedTitle);
    expect(document.head.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.content).toBe(expectedDescription);
    expect(structuredData['@type']).toEqual(['ProfilePage', 'WebPage']);
    expect(structuredData.name).toBe(expectedTitle);
    expect(structuredData.description).toBe(expectedDescription);
    expect(structuredData.url).toBe('https://henriquerod.com');
    expect(structuredData.mainEntity.jobTitle).toBe('Senior Software Engineer');
    expect(structuredData.mainEntity.description).toBe(expectedDescription);
    expect(structuredData.mainEntity.knowsAbout).toContain('React');
    expect(structuredData.mainEntity.knowsAbout).toContain('Scalable cloud architecture');
  });

  it('creates canonical and social metadata for the ControleAki case study', () => {
    service.setProjectMetadata(controleAki);

    const canonical = 'https://henriquerod.com/project/controleaki';
    expect(document.title).toBe('ControleAki Case Study | Henrique Rodrigues');
    expect(document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href).toBe(canonical);
    expect(document.head.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.content).toBe(canonical);
    expect(document.head.querySelector<HTMLMetaElement>('meta[property="og:image"]')?.content)
      .toBe('https://henriquerod.com/assets/imgs/projects/controleaki/controleaki-cover.webp');
  });
});
