interface PizzaBlockType {
  id: string;
  category: number;
  imageUrl: string;
  price: number;
  rating: number;
  sizes: number[];
  title: string;
  types: number[];
  description: string;
}

export default PizzaBlockType;
