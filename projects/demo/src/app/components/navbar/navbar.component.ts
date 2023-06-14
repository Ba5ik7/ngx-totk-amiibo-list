import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ThemePickerComponent } from '../theme-picker/theme-picker.component';

@Component({
  selector: 'ngx-navbar',
  template: `
    <nav class="navbar-header">
      <a mat-button routerLink="/" class="demo-logo-container">
        <img class="logo-img" src="./assets/img/amiibo-logo.png">
        <span class="logo-text">Totk-Amiibos</span>
      </a>
      <a mat-button class="docs-navbar-hide-small docs-button"
          routerLink="list" routerLinkActive="navbar-menu-item-selected">
        <span>List</span>
      </a>
      <a mat-button class="docs-navbar-hide-small docs-button"
          routerLink="viewer" routerLinkActive="navbar-menu-item-selected">
        <span>Viewer</span>
      </a>
      <a mat-button class="docs-navbar-hide-small docs-button"
          routerLink="map" routerLinkActive="navbar-menu-item-selected">
        <span>Map</span>
      </a>
      <div class="flex-spacer"></div>
      <ngx-theme-picker></ngx-theme-picker>
    </nav>
    <nav class="docs-navbar docs-navbar-show-small">
      <a mat-button class="docs-navbar-link"
          routerLink="list" routerLinkActive="navbar-menu-item-selected">
        <span>List</span>
      </a>
      <a mat-button class="docs-navbar-link"
          routerLink="viewer" routerLinkActive="navbar-menu-item-selected">
        <span>Viewer</span>
      </a>
      <a mat-button class="docs-navbar-link"
          routerLink="map" routerLinkActive="navbar-menu-item-selected">
        <span>Map</span>
      </a>
    </nav>
  `,
  styles: [`
    :host {
      position: fixed;
      left: 0;
      right: 0;
      z-index: 2;
      box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
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
      .docs-navbar { display: none; }
      .docs-navbar-show-small { display: none; }
      @media (max-width: 720px) {
        .docs-navbar-hide-small {
          display: none;
        }
        .docs-navbar-show-small {
          display: block;
        }
        .docs-navbar {
          display: flex;
          justify-content: space-around;
          padding-bottom: 8px;
          padding-top: 4px;
        }
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
