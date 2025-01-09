import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import { CardContainer, Overlay, Sidebar } from './styles';
import { goToConfirmation, goToDelivery } from '../../store/reducers/app';
import { formataPreco } from '../../Modal';
import { RootReducer } from '../../store';

const Payment = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state: RootReducer) => state.cart);

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.preco, 0);
  };

  const continueToConfirmation = () => {
    const orderId = crypto.randomUUID().substring(0, 8);
    dispatch(goToConfirmation(orderId));
  };

  const returnToDelivery = () => {
    dispatch(goToDelivery());
  };
  return (
    <CardContainer>
      <Overlay />
      <Sidebar>
        <h3>Pagamento - Valor a pagar {formataPreco(getTotalPrice())}</h3>
        <div>
          <label htmlFor="cardDisplayName">Nome no cartão</label>
          <input id="cardDisplayName" type="text" />
        </div>
        <div>
          <label htmlFor="cardNumber">Número do cartão</label>
          <input id="cardNumber" type="text" />
        </div>
        <div>
          <label htmlFor="cardCode">CVV</label>
          <input id="cardCode" type="text" />
        </div>
        <div>
          <label htmlFor="cep">CEP</label>
          <input id="cep" type="text" />
        </div>
        <div>
          <label htmlFor="expiresMonth">Mês de vencimento</label>
          <input id="expiresMonth" type="text" />
        </div>
        <div>
          <label htmlFor="expiresYear">Ano de vencimento</label>
          <input id="expiresYear" type="text" className="margin-bottom" />
        </div>
        <Button
          type="button"
          title="Clique aqui para continuer com a entrega"
          onClick={continueToConfirmation}
        >
          Continuar com a entrega
        </Button>
        <Button
          type="button"
          title="Clique aqui para retornar a edição de endereço"
          onClick={returnToDelivery}
        >
          Voltar para a edição de endereço
        </Button>
      </Sidebar>
    </CardContainer>
  );
};

export default Payment;
