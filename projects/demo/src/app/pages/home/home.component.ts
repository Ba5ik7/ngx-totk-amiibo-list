import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { BehaviorSubject } from 'rxjs';
import { Amiibo } from '../../services/amiibo/amiibos.model';
import { AmiiboService } from '../../services/amiibo/amiibo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  template: `
    <header focusOnNavigation class="header-background" >
      <div class="header-section">
        <div class="header-headline">
          <h1>Totk-Amiibos</h1>
        </div>
        <div class="header-start">
          <ngx-search-input class="search-input" [list]="list$" (filteredList)="filteredListSubject.next($event)"></ngx-search-input>
        </div>
      </div>
    </header>
    <main class="home-main">
      <div class="amiibo-list">
        <ng-container *ngFor="let item of filteredListSubject | async">
          <mat-card>
            <img mat-card-image [src]="'./assets/img/' + item.image" [alt]="item.name">
            <mat-card-content>
              <mat-card-title>{{item.name}}</mat-card-title>
              <mat-divider></mat-divider>
              <h6>Exclusives</h6>
              <p>{{item.exclusives}}</p>
              <h6>Extras</h6>
              <p>{{item.extras}}</p>
            </mat-card-content>
          </mat-card>
        </ng-container>
      </div>
    </main>
  `,
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    SearchInputComponent
  ],
})
export class HomeComponent {
  filteredListSubject = new BehaviorSubject<Amiibo[]>([]);
  list$ = inject(AmiiboService).list$;
}
