/**

Complete the following functions with their typing. Remember to change the `unknown` typings.

*/
var cars = [
    {
        model: 'Q7',
        brand: 'Audi',
        year: 2004
    },
    {
        model: '320',
        brand: 'BMW',
        year: 1992
    },
    {
        model: '6',
        brand: 'Mazda',
        year: 2018
    },
];
function carsAfter2000(cars) {
    return cars.filter(function (car) { return car.year > 2000; });
}
var newCars = carsAfter2000(cars);
