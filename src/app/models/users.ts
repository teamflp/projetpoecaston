export interface Users {
  inscription: [
    {
      id: number;
      firstName: string;
      lastName: string;
      birthday: Date;
      phone: string;
      email: string;
      password: string;
    }
  ]
  address: [
    {
      num: string;
      street: string;
      zip: string;
      city: string;
    },
  ],
}
