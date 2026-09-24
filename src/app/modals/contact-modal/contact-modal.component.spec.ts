import { ContactModalComponent } from './contact-modal.component';

describe('ContactModalComponent', () => {
  it('derives the lightweight chart from active projects', () => {
    const component = new ContactModalComponent(document);

    expect(component.projectsCount).toBeGreaterThan(0);
    expect(component.technologyStats.map(stat => stat.label)).toEqual(['Angular', 'Ionic', 'NestJS', 'PWA', 'React']);
    expect(component.technologyStats.every(stat => stat.value >= 0)).toBeTrue();
    expect(component.chartBackground).toContain('conic-gradient');
  });

  it('describes the chart for assistive technology', () => {
    const component = new ContactModalComponent(document);

    expect(component.chartLabel).toContain(`${component.projectsCount} active projects`);
    expect(component.chartLabel).toContain('Angular');
  });
});
