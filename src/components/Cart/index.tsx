import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import { CardContainer, Overlay, Sidebar, CartItem, Prices } from './styles';
import { RootReducer } from '../../store';
import { close, remove } from '../../store/reducers/cart';
import { parseToBrl } from '../../utils';
import { goToDelivery } from '../../store/reducers/app';

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

  const continueToDelivery = () => {
    dispatch(close());
    dispatch(goToDelivery());
  };

  return (
    <CardContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{parseToBrl(item.preco)}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      type="button"
                    />
                  </div>
                </CartItem>
              ))}
            </ul>
            <Prices>
              <span>Valor total</span>
              <span>{parseToBrl(getTotalPrice())}</span>
            </Prices>
            <Button
              type="button"
              title="Clique aqui para continuer com a entrega"
              onClick={continueToDelivery}
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra.
          </p>
        )}
      </Sidebar>
    </CardContainer>
  );
};

export default Cart;
