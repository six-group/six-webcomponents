export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
}

export namespace User {
  export const columns: { [K in keyof Partial<User>]: string } = {
    name: 'Name',
    email: 'E-mail',
    phone: 'Phone',
    username: 'Username',
    website: 'Website',
  };
}
