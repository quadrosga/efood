import Product from '../../models/Products';
import ProductCard from '../ProductCard';
import { List } from './styles';

type ProductsListProps = {
  products: Product[];
};

const ProductsList = ({ products }: ProductsListProps) => (
  <div className="container">
    <List>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          image={product.image}
        />
      ))}
    </List>
  </div>
);

export default ProductsList;
