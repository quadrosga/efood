import { useDispatch } from 'react-redux';
import { goToCart, goToPayment } from '../../store/reducers/app';
import Button from '../Button';
import { CardContainer, Overlay, Sidebar } from './styles';
import { open } from '../../store/reducers/cart';

const Delivery = () => {
  const dispatch = useDispatch();

  const continueToPayment = () => {
    dispatch(goToPayment());
  };

  const ReturnToCart = () => {
    dispatch(goToCart());
    dispatch(open());
  };

  return (
    <CardContainer>
      <Overlay />
      <Sidebar>
        <h3>Entrega</h3>
        <div>
          <label htmlFor="fullName">Quem irá receber</label>
          <input id="fullName" type="text" />
        </div>
        <div>
          <label htmlFor="address">Endereço</label>
          <input id="address" type="text" />
        </div>
        <div>
          <label htmlFor="city">Cidade</label>
          <input id="city" type="text" />
        </div>
        <div>
          <label htmlFor="cep">CEP</label>
          <input id="cep" type="text" />
        </div>
        <div>
          <label htmlFor="num">Número</label>
          <input id="num" type="text" />
        </div>
        <div>
          <label htmlFor="comp">Complemento (opcional)</label>
          <input id="comp" type="text" className="margin-bottom" />
        </div>
        <Button
          type="button"
          title="Clique aqui para continuer com a entrega"
          onClick={continueToPayment}
        >
          Continuar com a entrega
        </Button>
        <Button
          type="button"
          title="Clique aqui para retornar ao carrinho"
          onClick={ReturnToCart}
        >
          Voltar para o carrinho
        </Button>
      </Sidebar>
    </CardContainer>
  );
};

export default Delivery;
