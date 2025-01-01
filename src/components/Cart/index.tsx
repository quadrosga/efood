import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import { CardContainer, Overlay, Sidebar, CartItem, Prices } from './styles';
import { RootReducer } from '../../store';
import { close, remove } from '../../store/reducers/cart';
import { formataPreco } from '../../Modal';

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const removeFromCart = (id: number) => {
    dispatch(remove(id));
  };

  const getTotalPrice = () => {
    return items.reduce((acc, currentValue) => {
      return (acc += currentValue.preco);
    }, 0);
  };

  return (
    <CardContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
                <button onClick={() => removeFromCart(item.id)} type="button" />
              </div>
            </CartItem>
          ))}
        </ul>
        <Prices>
          <span>Valor total</span>
          <span>{formataPreco(getTotalPrice())}</span>
        </Prices>
        <Button type="button" title="Clique aqui para continuer com a entrega">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CardContainer>
  );
};

export default Cart;
