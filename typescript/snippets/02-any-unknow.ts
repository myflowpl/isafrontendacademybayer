let anything: any = 'test';

// The compiler stops informing us about the error, such a record will generate an error in the already running application
anything.add();

interface Chicken {
  country: 'PL' | 'DE',
  cena: number,
  farma: string,
}

interface HealthyChicken extends Chicken {
    country: 'PL',
  farma: 'WolnaKurka'
}

let biedronkaChicken: unknown = {
  country: 'PL',
  price: 20,
  farm: 'WolnaKurka'
}

function healthtChicken(kurczak: any): kurczak is HealthyChicken {
  return kurczak.krajPochodzenia === 'PL' && kurczak.farma === 'WolnaKurka';
}

function buyChicken(): void {
  // const chicken = biedronkaChicken; //  ❌ we don't have access to any field because the type is unknown
 if (healthtChicken(biedronkaChicken)) {
   const chicken = biedronkaChicken; // ✅ Here we already have access to the fields of the "KurczakZWolnegoWybiegu" type
 }
}