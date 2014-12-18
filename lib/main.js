import {Injector} from 'di';
import {Person} from './metabolicjs/Person';

let injector = new Injector();
let prs = injector.get(Person);
console.log(prs.bmi());