import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ThemePickerComponent } from '../theme-picker/theme-picker.component';

@Component({
  selector: 'ngx-navbar',
  template: `
    <nav class="navbar-header mat-elevation-z6">
      <a mat-button routerLink="/" class="demo-logo-container">
        <img class="logo-img" src="./assets/img/amiibo-logo.png">
        <span class="logo-text">Totk-Amiibos</span>
      </a>
      <a mat-button class="docs-navbar-hide-small docs-button"
          routerLink="viewer" routerLinkActive="navbar-menu-item-selected">
        <span>Viewer</span>
      </a>
      <div class="flex-spacer"></div>
      <ngx-theme-picker></ngx-theme-picker>
    </nav>
  `,
  styles: [`
    :host {
      position: fixed;
      left: 0;
      right: 0;
      z-index: 2;

      a {
        margin-right: 8px;
      }
      .navbar-header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 0 16px;
      }
      .logo-img {
        width: 26px;
        height: 26px;
        margin-right: 8px;
        vertical-align: middle;
      }
      .logo-text {
        vertical-align: middle;
        font-size: 1.225rem;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    ThemePickerComponent
  ],
})
export class NavbarComponent { }
