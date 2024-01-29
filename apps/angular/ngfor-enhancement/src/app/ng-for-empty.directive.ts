import {
  Directive,
  DoCheck,
  EmbeddedViewRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ngFor]',
  standalone: true,
})
export class NgForEmptyDirective<T> implements DoCheck {
  @Input() ngForOf?: T[] = undefined;

  @Input() ngForEmpty!: TemplateRef<unknown>;

  ref?: EmbeddedViewRef<unknown>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngDoCheck(): void {
    this.ref?.destroy();

    if (!this.ngForOf || this.ngForOf.length === 0) {
      this.viewContainerRef.createEmbeddedView(this.ngForEmpty);
    } else {
      this.ref?.destroy();
    }
  }
}
