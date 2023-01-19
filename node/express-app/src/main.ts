import { resolve } from 'path';

console.log('HELOO FROM EXPRESS 🥳 in:', resolve('./src/main.ts'))

class User {

  name = 'Piotr';

  setName(name: string) {
    this.name = name;
  }
  
  say() {
    return 'hello ' + this.name;
  }
}