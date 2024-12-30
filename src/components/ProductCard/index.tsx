import Button from '../Button';
import { Card, ProductDescription, ProductImage, ProductName } from './styles';

type ProductCardProps = {
  name: string;
  description: string;
  image: string;
};

const ProductCard = ({ name, description, image }: ProductCardProps) => (
  <Card>
    <ProductImage src={image} alt={name} />
    <ProductName>{name}</ProductName>
    <ProductDescription>{description}</ProductDescription>
    <Button type="button" title="Adicionar ao carrinho">
      Adicionar ao carrinho
    </Button>
  </Card>
);

export default ProductCard;
