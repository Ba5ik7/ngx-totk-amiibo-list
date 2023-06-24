import { Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArService } from '../../services/ar/ar.service';

@Component({
  selector: 'ngx-viewer',
  standalone: true,
  imports: [CommonModule],
  template: `<div #container></div><p>{{error}}`,
  styles: []
})
export class ViewerComponent implements OnInit, OnDestroy {
  arService = inject(ArService);
  error = this.arService.error;

  @ViewChild('container', { static: true }) containerRef!: ElementRef<HTMLElement>;

  ngOnInit() {
    this.arService.initialize(this.containerRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.arService.dispose();
  }
}
