import { ImageZoomModalComponent } from './image-zoom-modal.component';

describe('ImageZoomModalComponent', () => {
  let component: ImageZoomModalComponent;

  beforeEach(() => {
    component = new ImageZoomModalComponent(document);
    component.sources = ['cover.webp', 'first.webp', 'second.webp'];
    component.captions = ['Cover', 'First', 'Second'];
  });

  afterEach(() => component.ngOnDestroy());

  it('navigates through the image collection and emits the selected index', () => {
    spyOn(component.activeIndexChange, 'emit');

    component.next();
    expect(component.activeIndex).toBe(1);
    expect(component.source).toBe('first.webp');
    expect(component.activeIndexChange.emit).toHaveBeenCalledWith(1);

    component.previous();
    expect(component.activeIndex).toBe(0);
  });

  it('does not navigate beyond the collection bounds', () => {
    component.previous();
    expect(component.activeIndex).toBe(0);

    component.activeIndex = 2;
    component.next();
    expect(component.activeIndex).toBe(2);
  });

  it('closes with Escape and navigates with arrow keys', () => {
    spyOn(component.closed, 'emit');
    component.onKeydown(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
    expect(component.activeIndex).toBe(1);

    component.onKeydown(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(component.closed.emit).toHaveBeenCalled();
  });
});
