interface Cat {
  name: 'Kicia',
  type: 'cat',
}

interface Dog {
  name: 'Burek',
  type: 'dog',
}

// interface Fish {
//   name: 'Gold fish',
//   type: 'fish';
// }

type Animal = Cat | Dog;

declare const animal: Animal;

switch (animal.type) {
  case 'dog':
    console.log('This is dog');
    break;
  case 'cat':
    console.log('This is cat');
    break;
  default:
    const isNever: never = animal;
}