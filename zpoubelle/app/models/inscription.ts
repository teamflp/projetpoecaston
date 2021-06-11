export interface Inscription {
//   inscription: [
//     {
//       id: number;
//       firstName: string;
//       lastName: string;
//       birthday: Date;
//       phone: string;
//       email: string;
//       password: string;
//     }
//   ]
//   address: [
//     {
//       num: string;
//       street: string;
//       zip: string;
//       city: string;
//     },
//   ],
  inscription: {
    id: number;
    firstName: string;
    lastName: string;
    birthday: Date;
    phone: string;
    email: string;
    password: string;
    num: string;
    street: string;
    zip: string;
    city: string;
  }
}