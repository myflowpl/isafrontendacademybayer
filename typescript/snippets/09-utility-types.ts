// Built-in helper types available "https://www.typescriptlang.org/docs/handbook/utility-types.html"

interface Cars {
  id: number;
  model: string;
  brand: string;
}

type PartialCars = Partial<Cars>;

interface User {
  email?: string;
}


/* Please note that the RequiredUser type contains 3 fields, not 1
 * because it connects to the interface from the "generic-types.ts" file
*/
type RequiredUser = Required<User>;

type PickCars = Pick<Cars, 'model'>
type OmitCars = Omit<Cars, 'id'>


interface ExampleStudent {
  name?: string,
  number?: number,
}


// Helper types can be created by us and combined
type Reveal<T> = { [P in keyof T]: T[P] }
type RequiredFields<T, K extends keyof T> = Reveal<
  Required<Pick<T, K>> & Omit<T, K>
>
type StudentNameRequired = RequiredFields<ExampleStudent, 'name'>
