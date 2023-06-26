import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArService } from '../../services/ar/ar.service';

@Component({
  selector: 'ngx-viewer',
  standalone: true,
  imports: [CommonModule],
  template: `<div #container></div><p>{{error}}`,
  styles: [],
})
export class ViewerComponent implements OnInit, OnDestroy {
  arService = inject(ArService);
  renderer2 = inject(Renderer2);
  error = this.arService.error;

  @ViewChild('container', { static: true }) containerRef!: ElementRef<HTMLElement>;

  ngOnInit() {
    this.renderer2.setStyle(document.body, 'overflow', 'hidden');
    this.arService.initialize(this.containerRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.arService.dispose();
    // need to reset the body overflow to visible
    this.renderer2.setStyle(document.body, 'overflow', 'visible');
  }
}
