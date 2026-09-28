import { AfterViewInit, Component, DOCUMENT, ElementRef, EventEmitter, HostListener, Inject, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-zoom-modal',
  templateUrl: './image-zoom-modal.component.html',
  styleUrls: ['./image-zoom-modal.component.scss'],
  standalone: false,
})
export class ImageZoomModalComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() public sources: string[] = [];
  @Input() public captions: string[] = [];
  @Input() public activeIndex = 0;
  @Output() public readonly activeIndexChange = new EventEmitter<number>();
  @Output() public readonly closed = new EventEmitter<void>();
  @ViewChild('dialog') private dialog?: ElementRef<HTMLElement>;
  @ViewChild('closeButton') private closeButton?: ElementRef<HTMLButtonElement>;

  private readonly previouslyFocusedElement: HTMLElement | null;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.previouslyFocusedElement = this.document.activeElement as HTMLElement | null;
    this.document.body.style.overflow = 'hidden';
  }

  public get source(): string {
    return this.sources[this.activeIndex] || '';
  }

  public get caption(): string {
    return this.captions[this.activeIndex] || 'Expanded project screenshot';
  }

  public ngOnChanges(_changes: SimpleChanges): void {
    this.activeIndex = Math.max(0, Math.min(this.activeIndex, Math.max(this.sources.length - 1, 0)));
  }

  public ngAfterViewInit(): void {
    this.closeButton?.nativeElement.focus();
  }

  public previous(): void {
    this.select(this.activeIndex - 1);
  }

  public next(): void {
    this.select(this.activeIndex + 1);
  }

  public closeModal(): void {
    this.closed.emit();
  }

  @HostListener('document:keydown', ['$event'])
  public onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeModal();
      return;
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.previous();
      return;
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.next();
      return;
    }
    if (event.key !== 'Tab' || !this.dialog)
      return;

    const focusable = Array.from(this.dialog.nativeElement.querySelectorAll<HTMLButtonElement>('button:not([disabled])'));
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

  public ngOnDestroy(): void {
    this.document.body.style.overflow = '';
    this.previouslyFocusedElement?.focus();
  }

  private select(index: number): void {
    if (index < 0 || index >= this.sources.length || index === this.activeIndex)
      return;
    this.activeIndex = index;
    this.activeIndexChange.emit(index);
  }
}
