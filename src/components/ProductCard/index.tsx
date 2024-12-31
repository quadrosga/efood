import Button from '../Button';
import { Card, ProductDescription, ProductImage, ProductName } from './styles';

export interface MenuItem {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

type ProductCardProps = {
  menuItem: MenuItem;
  onSelectProduct: (product: MenuItem) => void;
};

const ProductCard = ({ menuItem, onSelectProduct }: ProductCardProps) => {
  const getDescription = (description: string) => {
    if (description.length > 147) {
      return description.slice(0, 147) + '...';
    }
    return description;
  };

  return (
    <Card>
      <ProductImage src={menuItem.foto} alt={menuItem.nome} />
      <ProductName>{menuItem.nome}</ProductName>
      <ProductDescription>
        {getDescription(menuItem.descricao)}
      </ProductDescription>
      <div>
        <Button
          type="button"
          title="Adicionar ao carrinho"
          onClick={() => onSelectProduct(menuItem)}
        >
          Adicionar ao carrinho
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
