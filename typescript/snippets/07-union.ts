interface Cash {
  type: 'cash',
  commission: number,
  currency: string,
}

interface Card {
  type: 'card',
  commission: number,
  currency: string,
  rejected: boolean;
}

type SinglePayment = Cash | Card;

declare let payment: SinglePayment;

// payment.rejected // ❌ we don't have access because we don't know if the payment is a card or cash

switch(payment.type) {
  case 'card':
    payment.rejected // Here we have access because TypeScript makes sure the payment is cash
    break;
}