import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface IEventBusArgs {
  type: string;
  data: any
}

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private _messages$ = new Subject<IEventBusArgs>();

  constructor() { }

  emit(type: string, data: any) {
    this._messages$.next({ type, data });
  }

  observe(type: string) {
    return this._messages$.pipe(
      filter(m => m.type == type),
      map(m => m.data)
    )
  }
}
