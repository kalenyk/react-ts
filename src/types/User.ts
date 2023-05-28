type User = {
  email: string;
  name: string;
  id: number;
  phone: string;
  username: string;
  website: string;
  address: {
    city: number;
    geo: {
      lat: string;
      lng: string;
    };
    suitcode: string;
    zipcode: string;
  };
  company: {
    name: string;
    bs: string;
    catchPhrase: string;
  };
};

export default User;
