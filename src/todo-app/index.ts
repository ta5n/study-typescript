import { print } from './text-helpers';
import { Person } from './person';

console.log('» index.ts is running');
print('Tasks...');

let person = new Person('Bob', 34);
console.log(person.getGreeting());
