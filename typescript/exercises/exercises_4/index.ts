/*
  Exercise 1

  Create a payment type containing amount, currency ('PLN' only) and date
*/
interface Payment {
    amount: number;
    currency: 'PLN';
    date: string;
}

/*
  Exercise 2

  Create a product type containing name, price, quantity of available items, product type (only 'phone' and 'computer')
*/
interface Product {
    name: string;
    price: number;
    avaiableItems: number;
    type: 'phone' | 'computer'
}


/*
  Exercise 3

  Create an order type containing information about payment (exercise 1), product (exercise 2) and order date and status (only 'started', 'in progress', 'completed')
*/
interface Order {
    payment: Payment;
    product: Product;
    date: string;
    status: 'started' | 'in progress' | 'completed';
}


/*
  Exercise 4

  Create a function that will return product information (Exercise 2) from the order passed to it (Exercise 3)
*/
function getProductFromOrder(order: Order): Product {
    return order.product
}





/*
  Exercise 5

  Create a function that will return payment information (Exercise 1) from the order passed to it (Exercise 3)
*/
function getPaymentFromOrder(order: Order): Payment {
    return order.payment
}