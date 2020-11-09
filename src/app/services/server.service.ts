import { Injectable, NgZone } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SseService } from './sse.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private zone: NgZone, private sseService: SseService) { }

  getServerEvent(url: string) {
    return new Observable(observer => {
    const eventSource = this.sseService.getEventSource(url);

    eventSource.onmessage = event => {
      this.zone.run(() => {
        observer.next(event);
      })
    };

    eventSource.onerror = error => {
      this.zone.run(() => {
        observer.error(error);
      });
    };
  });
  }
}
