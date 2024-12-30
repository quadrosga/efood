class Product {
  id: number;
  name: string;
  image: string;
  description: string;

  constructor(id: number, name: string, image: string, description: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
  }
}

export default Product;
