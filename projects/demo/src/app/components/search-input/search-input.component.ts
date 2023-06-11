import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable, Subject, combineLatest, debounce, debounceTime, map, of, startWith, takeUntil, tap } from 'rxjs';
import { Amiibo } from '../../services/amiibo/amiibos.model';

@Component({
  selector: 'ngx-search-input',
  template: `
    <mat-form-field appearance="fill" color="accent">
      <mat-label>Filter</mat-label>
      <input class="filter-text"
        matInput
        [formControl]="searchInput"
        [autofocus]="true">
    </mat-form-field>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Output('filteredList') filteredListEmitter = new EventEmitter<Amiibo[]>();
  @Input('list') list$: Observable<Amiibo[]> = of([]);

  destory: Subject<boolean> = new Subject();

  searchInput = new FormControl([]);
  filter$ = this.searchInput.valueChanges.pipe(
    debounceTime(300),
    startWith('')
  );

  ngOnInit(): void {    
    combineLatest([
      this.list$,
      this.filter$ as Observable<string>,
    ]).pipe(
      map(([list, filterString]) => {
        filterString = (typeof filterString === 'string' ? filterString : '').trim().toLocaleLowerCase();
        return list.filter(item =>
          item.name.toLocaleLowerCase().includes(filterString) ||
          item.image.toLocaleLowerCase().includes(filterString) ||
          item.exclusives.toLocaleLowerCase().includes(filterString) ||
          item.extras.toLocaleLowerCase().includes(filterString)
        ); // Filter items that include the search term in any property
      }),
      tap((filteredBlocks) => {
        this.filteredListEmitter.emit(filteredBlocks);
      }),
      takeUntil(this.destory),
    ).subscribe();
  }
  

  ngOnDestroy(): void {
    this.destory.next(true);
  }
}
