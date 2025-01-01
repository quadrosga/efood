import Button from '../Button';
import { CardContainer, Overlay, Sidebar, CartItem, Prices } from './styles';

const Cart = () => (
  <CardContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src="https://placehold.co/80x80" />
          <div>
            <h3>nome to produto</h3>
            <p>preço do produto</p>
            <button type="button" />
          </div>
        </CartItem>
        <CartItem>
          <img src="https://placehold.co/80x80" />
          <div>
            <h3>nome to produto</h3>
            <p>preço do produto</p>
            <button type="button" />
          </div>
        </CartItem>
      </ul>
      <Prices>
        <span>Valor total</span>
        <span>R$ 182,70</span>
      </Prices>
      <Button type="button" title="Clique aqui para continuer com a entrega">
        Continuar com a entrega
      </Button>
    </Sidebar>
  </CardContainer>
);

export default Cart;
