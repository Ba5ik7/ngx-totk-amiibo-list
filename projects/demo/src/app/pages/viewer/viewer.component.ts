import { Component, ElementRef, Inject, OnDestroy, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ArService } from '../../services/ar/ar.service';

export interface DialogData {
  load: string;
}

@Component({
  selector: 'ngx-viewer',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  template: `<div #container></div><p>`,
  styles: [],
})
export class ViewerComponent implements OnInit, OnDestroy {
  arService = inject(ArService);
  renderer2 = inject(Renderer2);
  dialog = inject(MatDialog);

  @ViewChild('container', { static: true }) containerRef!: ElementRef<HTMLElement>;

  ngOnInit() {
    this.dialog.open(DialogOverviewExampleDialog, {
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
    });
    // AR.js places the video element on the body need to the body overflow to hidden
    this.renderer2.setStyle(document.body, 'overflow', 'hidden');
    this.arService.initialize(this.containerRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.arService.dispose();
    // need to reset the body overflow to visible
    this.renderer2.setStyle(document.body, 'overflow', 'visible');
  }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
    <div class="progress-wrapper">
      <h1> Dumby Loading Screen </h1>
      <mat-progress-bar mode="indeterminate"></mat-progress-bar>
      <a mat-raised-button color="primary" (click)="closeDislog()">Start</a>
    </div>
    `,
  styles: [`
    :host { display: block; } 
    .progress-wrapper {
      color: white;
      display: flex;
      flex-direction: column;
      gap: 50px;
      justify-content: center; 
      align-items: center; 
      height: 100vh;
    }
  `],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatProgressBarModule],
})
export class DialogOverviewExampleDialog implements OnInit {
  load = 'Loading';
  arService = inject(ArService);
  dialogRef = inject(MatDialogRef<DialogOverviewExampleDialog>);

  ngOnInit(): void {
    this.arService.loadingProgress$.subscribe((progress) => {
      this.load = `Loading ${~~progress}%`;
      console.log('this.load', this.load);
      if (progress === 100) {
        setTimeout(() => {
          // this.dialogRef.close();
        }, 2000);
      }
    });
  }

  closeDislog() {
    this.dialogRef.close();
  }
}
