import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Amiibo, amiibos } from './amiibos.model';

@Injectable({
  providedIn: 'root'
})
export class AmiiboService {

  listSubject = new BehaviorSubject<Amiibo[]>(amiibos);
  list$ = this.listSubject.asObservable();
}
