import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import { CardContainer, Overlay, Sidebar } from './styles';
import { RootReducer } from '../../store';
import { goToCart } from '../../store/reducers/app';

const Confirmation = () => {
  const orderId = useSelector((state: RootReducer) => state.app.orderId);

  const dispatch = useDispatch();

  const exitConfirmation = () => {
    dispatch(goToCart());
  };

  return (
    <CardContainer>
      <Overlay onClick={exitConfirmation} />
      <Sidebar>
        <>
          <h3>Pedido realizado - {orderId}</h3>
          <p className="margin-bottom">
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p className="margin-bottom">
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p className="margin-bottom">
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <Button type="button" title="Clique aqui para concluir a entrega">
            Concluir
          </Button>
        </>
      </Sidebar>
    </CardContainer>
  );
};

export default Confirmation;
