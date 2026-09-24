//#region Imports


import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Inject, Input, OnDestroy, Output, ViewChild, DOCUMENT } from '@angular/core';

//#endregion

@Component({
    selector: 'app-image-zoom-modal',
    templateUrl: './image-zoom-modal.component.html',
    styleUrls: ['./image-zoom-modal.component.scss'],
    standalone: false
})
export class ImageZoomModalComponent implements AfterViewInit, OnDestroy {

  //#region Constructor

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.previouslyFocusedElement = this.document.activeElement as HTMLElement | null;
  }

  //#endregion

  //#region Public Properties

  @Input()
  public src!: string;

  @Output() public readonly closed = new EventEmitter<void>();

  @ViewChild('closeButton') private closeButton?: ElementRef<HTMLButtonElement>;

  private readonly previouslyFocusedElement: HTMLElement | null;

  //#endregion

  //#region Public Functions

  public ngAfterViewInit(): void {
    this.closeButton?.nativeElement.focus();
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

  @HostListener('document:keydown.escape')
  public onEscape(): void {
    this.closeModal();
  }

  //#endregion

}
