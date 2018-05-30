export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}
export class ProductP {
  _id: any;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export class ProductV {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

export class Sale {
  productosV: ProductV[];
  total: number;
  _id: string;
  date: number;
}

export const PRODUCTS: Product[] = [
  {id: 1, name: 'objeto' , description: 'Description chida del objeto 1', category: 'basico', image: 'tarro.jpg', price: 99},
  {id: 2, name: 'objeto' , description: 'Description chida', category: 'basico', image: 'tarro2.jpg', price: 77},
  {id: 3, name: 'objeto' , description: 'Description chida', category: 'basico', image: 'tarro3.jpg', price: 55},
  {id: 4, name: 'objyyy' , description: 'Description chida', category: 'basico', image: 'tarro4.jpg', price: 44},
  {id: 5, name: 'objegg' , description: 'Aqui va algo pro ', category: 'basico', image: 'tarro5.jpg', price: 35},
  {id: 6, name: 'obsdto' , description: 'Aqui va algo pro ', category: 'basico', image: 'tarro5.jpg', price: 35},
  {id: 7, name: 'osfrto' , description: 'Aqui va algo pro ', category: 'basico', image: 'tarro5.jpg', price: 35},
  {id: 8, name: 'ohthto' , description: 'Aqui va algo pro ', category: 'basico', image: 'tarro5.jpg', price: 35},
];

export const PRODUCTS2: ProductV[] = [
  {_id: '5af4fbf6d5708d1cc8ddb7d3', name: 'objeto' , quantity: 1, price: 99},
  {_id: '5af4fc9bd5708d1cc8ddb7d4', name: 'objeto' , quantity: 1, price: 77},
  {_id: '5af4fbf6d5708d1cc8ddb7d5', name: 'objeto' , quantity: 1, price: 55},
  {_id: '5af4fbf6d5708d1cc8ddb7d6', name: 'objyyy' , quantity: 1, price: 44},
  {_id: '5af4fbf6d5708d1cc8ddb7d7', name: 'objegg' , quantity: 1, price: 35},
  {_id: '5af9cbafec03950c64992501', name: 'obsdto' , quantity: 1, price: 35}
];
