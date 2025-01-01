import { useDispatch } from 'react-redux';
import Button from '../components/Button';
import { MenuItem } from '../pages/Home';
import {
  CloseButton,
  Image,
  ModalContainer,
  ModalContent,
  Overlay,
} from './styles';
import close from '../assets/images/close.png';
import { add, open, Product } from '../store/reducers/cart';

type ModalProps = {
  products: MenuItem[];
  onClose: () => void;
  restauranteId: number;
};

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco);
};

const Modal = ({ products, onClose }: ModalProps) => {
  const dispatch = useDispatch();

  const addToCart = (product: Product) => {
    dispatch(add(product));
    dispatch(open());
  };
  return (
    <>
      <Overlay onClick={onClose}>
        <ModalContainer
          className="container"
          onClick={(e) => e.stopPropagation()}
        >
          <CloseButton src={close} alt="ícone de fechar" onClick={onClose} />
          {products.map((product) => (
            <ModalContent key={product.id}>
              <Image src={product.foto} alt={product.nome} />
              <div className="details">
                <h3>{product.nome}</h3>
                <p>{product.descricao}</p>
                <p>{`Serve: ${product.porcao}`}</p>
                <Button
                  onClick={() => addToCart(product)}
                  type="button"
                  title="Adicionar ao carrinho"
                >
                  {`Adicionar ao carrinho - ${formataPreco(product.preco)}`}
                </Button>
              </div>
            </ModalContent>
          ))}
        </ModalContainer>
      </Overlay>
    </>
  );
};

export default Modal;
