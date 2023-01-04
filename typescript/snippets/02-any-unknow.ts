let anything: any = 'test';

// The compiler stops informing us about the error, such a record will generate an error in the already running application
anything.add();

interface Chicken {
  country: 'PL' | 'DE',
  price: number,
  farm: string,
}

interface HealthyChicken extends Chicken {
  country: 'PL',
  farm: 'WolnaKurka'
}

let biedronkaChicken: unknown = {
  country: 'PL',
  price: 20,
  farm: 'WolnaKurka'
}

function healthyChicken(chicken: any): chicken is HealthyChicken {
  return chicken.country === 'PL' && chicken.farm === 'WolnaKurka';
}

function buyChicken(): void {
//   const chicken = biedronkaChicken; //  ❌ we don't have access to any field because the type is unknown

 if (healthyChicken(biedronkaChicken)) {
   const chicken = biedronkaChicken; // ✅ Here we already have access to the fields of the "HealthyChicken" type
 }
}