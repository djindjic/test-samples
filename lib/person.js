import {Inject} from 'di';
import {BCalculator} from './metabolicjs/bCalculator';

@Inject(BCalculator)
export class Person {
  constructor(bCalculator) {
    this.bCalculator = bCalculator;
  }

  bmi() {
    this.bCalculator.bmi();
  }
}