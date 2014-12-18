import {Inject} from 'di';
import {BCalculator} from './BCalculator';

@Inject(BCalculator)
export class Person {
  constructor(bCalculator, name) {
    this.bCalculator = bCalculator;
    console.log(name);
  }

  bmi() {
    this.bCalculator.bmi(this);
  }
}