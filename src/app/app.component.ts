import { Component, OnInit } from '@angular/core';
import { ServerService } from './services/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private server: ServerService) {}

  events: any;

  ngOnInit() {
    this.server.getServerEvent('/updates').subscribe(data => {
      this.events = data;
      console.log(data);
    });
  }
}
