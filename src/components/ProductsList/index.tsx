import { useState } from 'react';
import ProductCard from '../ProductCard';
import { List } from './styles';
import { MenuItem } from '../ProductCard';
import Modal from '../../Modal';

export type ProductsListProps = {
  products: MenuItem[];
};

const ProductsList = ({ products }: ProductsListProps) => {
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);

  const handleSelectProduct = (product: MenuItem) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="container">
        <List>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              menuItem={product}
              onSelectProduct={handleSelectProduct}
            />
          ))}
        </List>
      </div>
      {selectedProduct && (
        <Modal products={[selectedProduct]} onClose={closeModal} />
      )}
    </>
  );
};

export default ProductsList;
