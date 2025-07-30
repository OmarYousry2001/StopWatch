import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  imports: [CommonModule],
  templateUrl: './stop-watch.html',
  styleUrl: './stop-watch.scss',
})
export class StopWatch {
  isRunning: boolean = false;
  elapsedTime: number = 0;
  intervalRef: any;

  public startStop() {
    this.isRunning ? this.stop() : this.start();
  }

  private start() {
    this.isRunning = true;
    this.intervalRef = setInterval(() => {
      this.elapsedTime += 0.1; // Increment by 0.1 seconds
    }, 100);
    console.log('Stopwatch started');
  }

  private stop() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    console.log('Stopwatch stopped');
  }

  reset() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    this.elapsedTime = 0;
  }
}
