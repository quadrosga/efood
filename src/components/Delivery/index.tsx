import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updateDelivery } from '../../store/reducers/delivery';
import { goToCart, goToPayment } from '../../store/reducers/app';
import Button from '../Button';
import { CardContainer, Overlay, Sidebar } from './styles';
import { open } from '../../store/reducers/cart';
import { RootReducer } from '../../store';
import { Navigate } from 'react-router-dom';

const Delivery = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state: RootReducer) => state.cart);

  const ReturnToCart = () => {
    dispatch(goToCart());
    dispatch(open());
  };

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('O nome do recebedor é obrigatório.'),
      description: Yup.string().required('O endereço é obrigatório.'),
      city: Yup.string().required('A cidade é obrigatória.'),
      zipCode: Yup.string()
        .required('O CEP é obrigatório.')
        .matches(/^\d{5}-?\d{3}$/, 'CEP inválido. Exemplo: 12345-678'),
      number: Yup.number()
        .typeError('O número deve ser numérico.')
        .required('O número é obrigatório.'),
      complement: Yup.string(),
    }),
    onSubmit: async (values) => {
      dispatch(
        updateDelivery({
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement,
          },
        })
      );
      dispatch(goToPayment());
    },
  });

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;

    if (isTouched && isInvalid) return message;
    return '';
  };

  if (items.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <CardContainer>
        <Overlay onClick={ReturnToCart} />
        <Sidebar>
          <h3>Entrega</h3>
          <div>
            <label htmlFor="receiver">Quem irá receber</label>
            <input
              id="receiver"
              type="text"
              value={form.values.receiver}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('receiver', form.errors.receiver)}</small>
          </div>
          <div>
            <label htmlFor="description">Endereço</label>
            <input
              id="description"
              type="text"
              value={form.values.description}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {' '}
              {getErrorMessage('description', form.errors.description)}
            </small>
          </div>
          <div>
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('city', form.errors.city)}</small>
          </div>
          <div>
            <label htmlFor="zipCode">CEP</label>
            <input
              id="zipCode"
              type="text"
              value={form.values.zipCode}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('zipCode', form.errors.zipCode)}</small>
          </div>
          <div>
            <label htmlFor="number">Número</label>
            <input
              id="number"
              type="text"
              value={form.values.number}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('number', form.errors.number)}</small>
          </div>
          <div>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              id="complement"
              type="text"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </div>
          <Button
            type="submit"
            title="Clique aqui para continuar com o pagamento"
            onClick={form.handleSubmit}
          >
            Continuar com o pagamento
          </Button>
          <Button
            type="button"
            title="Clique aqui para voltar para o carrinho"
            onClick={ReturnToCart}
          >
            Voltar para o carrinho
          </Button>
        </Sidebar>
      </CardContainer>
    </form>
  );
};

export default Delivery;
