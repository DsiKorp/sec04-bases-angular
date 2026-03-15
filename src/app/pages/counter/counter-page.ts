import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter-page.html',
  styleUrls: ['./counter-page.css'],
  // Para quitar el zone.js y que Angular solo detecte los cambios cuando se actualice el signal
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPage {
  counter = 0;
  counterSignal = signal(0);

  constructor() {
    setInterval(() => {
      console.log('Tick');
      this.counter++;
      this.counterSignal.update(counter => counter + 1);
    }, 2000);
  }

  increment(value: number = 1) {
    this.counter += value;
    this.counterSignal.update(counter => counter + value);
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
