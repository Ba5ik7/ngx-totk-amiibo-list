import { Component, HostBinding, OnInit, inject } from '@angular/core';
import { AmiiboService } from '../../services/amiibo/amiibo.service';
import { BehaviorSubject } from 'rxjs';
import { Amiibo } from '../../services/amiibo/amiibos.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @HostBinding('class.main-content') readonly mainContentClass = true;
  filteredListSubject = new BehaviorSubject<Amiibo[]>([]);
  list$ = inject(AmiiboService).list$;
}
