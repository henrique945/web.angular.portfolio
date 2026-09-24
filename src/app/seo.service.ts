
import { Inject, Injectable, DOCUMENT } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ProjectInterface } from './models/interfaces/project.interface';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly siteUrl = 'https://henriquerod.com';
  private readonly defaultImage = `${this.siteUrl}/assets/imgs/profile.webp`;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly title: Title,
    private readonly meta: Meta,
  ) {}

  public setHomeMetadata(): void {
    const pageTitle = 'Henrique Rodrigues | Senior Full-Stack Engineer';
    const description = 'Senior Full-Stack Engineer specializing in Angular, Node.js and AWS, with 7+ years of experience building cloud products and leading engineering teams.';

    this.setCommonMetadata(pageTitle, description, '/', this.defaultImage);
    this.setStructuredData({
      '@context': 'https://schema.org',
      '@type': ['ProfilePage', 'WebPage'],
      mainEntity: {
        '@type': 'Person',
        name: 'Henrique Rodrigues',
        jobTitle: 'Senior Full-Stack Engineer',
        url: this.siteUrl,
        image: this.defaultImage,
        sameAs: [
          'https://www.linkedin.com/in/henrique-rodrigues7/',
          'https://github.com/henrique945',
          'https://stackoverflow.com/users/11611128/henrique-rodrigues',
        ],
        knowsAbout: ['Angular', 'Node.js', 'NestJS', 'AWS', 'TypeScript', 'Software Architecture'],
      },
    });
  }

  public setProjectMetadata(project: ProjectInterface): void {
    const title = `${project.name} Case Study | Henrique Rodrigues`;
    const description = project.seoDescription || project.summary || this.toPlainText(project.outcome || project.description).slice(0, 155);
    const path = `/project/${project.id}`;
    const image = this.absoluteUrl(project.socialImage || project.coverImage);

    this.setCommonMetadata(title, description, path, image);
    this.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.name,
      description,
      url: `${this.siteUrl}${path}`,
      image,
      creator: { '@type': 'Person', name: 'Henrique Rodrigues', url: this.siteUrl },
      keywords: project.tags.join(', '),
    });
  }

  private setCommonMetadata(title: string, description: string, path: string, image: string): void {
    const url = `${this.siteUrl}${path}`;
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Henrique Rodrigues Portfolio' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    let canonical = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }
    canonical.href = url;
  }

  private setStructuredData(data: object): void {
    this.document.getElementById('structured-data')?.remove();
    const script = this.document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }

  private absoluteUrl(path: string): string {
    return path.startsWith('http') ? path : `${this.siteUrl}/${path.replace(/^\//, '')}`;
  }

  private toPlainText(value: string): string {
    const element = this.document.createElement('div');
    element.innerHTML = value;
    return (element.textContent || '').replace(/\s+/g, ' ').trim();
  }
}
