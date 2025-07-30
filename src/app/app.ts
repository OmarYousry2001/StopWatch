import { Component } from '@angular/core';
import { StopWatch } from './stop-watch/stop-watch';

@Component({
  selector: 'app-root',
  imports: [StopWatch],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'StopWatch';
}
