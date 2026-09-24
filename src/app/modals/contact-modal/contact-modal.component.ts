//#region Imports


import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Inject, OnDestroy, Output, ViewChild, DOCUMENT } from '@angular/core';
import { listProjects } from '../../data/projects';
import { TechEnum } from '../../models/enums/tech.enum';

//#endregion

interface TechnologyStat {
  label: string;
  value: number;
  color: string;
}

@Component({
    selector: 'app-contact-modal',
    templateUrl: './contact-modal.component.html',
    styleUrls: ['./contact-modal.component.scss'],
    standalone: false
})
export class ContactModalComponent implements AfterViewInit, OnDestroy {

  private static readonly technologyDefinitions: ReadonlyArray<{ label: string; tech: TechEnum; color: string }> = [
    { label: 'Angular', tech: TechEnum.ANGULAR, color: '#f26565' },
    { label: 'Ionic', tech: TechEnum.IONIC, color: '#5271c9' },
    { label: 'NestJS', tech: TechEnum.NESTJS, color: '#91ce73' },
    { label: 'PWA', tech: TechEnum.PWA, color: '#ffbd4a' },
    { label: 'React', tech: TechEnum.REACT, color: '#68c4dc' },
  ];

  //#region Constructor

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.previouslyFocusedElement = this.document.activeElement as HTMLElement | null;
  }

  //#endregion

  //#region Public Properties

  @Output() public readonly closed = new EventEmitter<void>();

  @ViewChild('dialog') private dialog?: ElementRef<HTMLElement>;

  public readonly projectsCount = listProjects.length;
  public readonly technologyStats: TechnologyStat[] = ContactModalComponent.technologyDefinitions.map(definition => ({
    label: definition.label,
    color: definition.color,
    value: listProjects.filter(project => project.techs.includes(definition.tech)).length,
  }));
  public readonly chartBackground = this.buildChartBackground();
  public readonly chartLabel = `Technology distribution across ${this.projectsCount} active projects: ${this.technologyStats.map(stat => `${stat.label} ${stat.value}`).join(', ')}`;

  private readonly previouslyFocusedElement: HTMLElement | null;

  //#endregion

  //#region Public Functions

  public ngAfterViewInit(): void {
    this.dialog?.nativeElement.querySelector<HTMLElement>('button, a')?.focus();
  }

  public ngOnDestroy(): void {
    this.previouslyFocusedElement?.focus();
  }

  public closeModal(): void {
    this.closed.emit();
  }

  public onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget)
      this.closeModal();
  }

  @HostListener('document:keydown', ['$event'])
  public onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeModal();
      return;
    }

    if (event.key !== 'Tab' || !this.dialog)
      return;

    const focusable = Array.from(this.dialog.nativeElement.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
    if (!focusable.length)
      return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && this.document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && this.document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  private buildChartBackground(): string {
    const total = this.technologyStats.reduce((sum, stat) => sum + stat.value, 0);
    let accumulated = 0;
    const segments = this.technologyStats.map(stat => {
      const start = accumulated;
      accumulated += total ? stat.value / total * 100 : 0;
      return `${stat.color} ${start.toFixed(2)}% ${accumulated.toFixed(2)}%`;
    });

    return `conic-gradient(${segments.join(', ')})`;
  }
}
