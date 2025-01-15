import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setOrderId, updatePayment } from '../../store/reducers/payment';
import { updateDelivery } from '../../store/reducers/delivery';
import { goToConfirmation, goToDelivery } from '../../store/reducers/app';
import { usePurchaseMutation } from '../../services/api';
import Button from '../Button';
import { CardContainer, Overlay, Sidebar } from './styles';
import { RootReducer } from '../../store';
import { parseToBrl } from '../../utils';
import { useEffect } from 'react';

interface PaymentFormValues {
  cardDisplayName: string;
  cardNumber: string;
  cardCode: string;
  cep: string;
  expiresMonth: string;
  expiresYear: string;
}

const Payment = () => {
  const dispatch = useDispatch();
  const [purchase, { isLoading, isError, isSuccess, data, error }] =
    usePurchaseMutation();

  useEffect(() => {
    console.log('Mutation State:', {
      isLoading,
      isError,
      isSuccess,
      data,
      error,
    });
  }, [isLoading, isError, isSuccess, data, error]);

  const { items } = useSelector((state: RootReducer) => state.cart);
  const { receiver, address } = useSelector(
    (state: RootReducer) => state.delivery
  );

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.preco, 0);
  };

  const continueToConfirmation = async (values: PaymentFormValues) => {
    const purchaseData = {
      products: items.map((item) => ({ id: item.id, price: item.preco })),
      delivery: {
        receiver: receiver,
        address: {
          ...address,
          number: String(address.number),
        },
      },
      payment: {
        card: {
          name: values.cardDisplayName,
          number: String(values.cardNumber),
          code: Number(values.cardCode),
          expires: {
            month: Number(values.expiresMonth),
            year: Number(values.expiresYear),
          },
        },
      },
    };

    try {
      const response = await purchase(purchaseData).unwrap();
      console.log('Resposta da purchase mutation:', response);

      if (response && response.orderId) {
        dispatch(setOrderId(response.orderId));
        dispatch(goToConfirmation(response.orderId));
      } else {
        console.error('Order ID não disponível');
      }
    } catch (error) {
      console.error('Erro ao processar o pagamento', error);
    }
  };

  const returnToDelivery = () => {
    dispatch(goToDelivery());
  };

  const form = useFormik<PaymentFormValues>({
    initialValues: {
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      cep: '',
      expiresMonth: '',
      expiresYear: '',
    },
    validationSchema: Yup.object({
      cardDisplayName: Yup.string().required('O campo é obrigatório.'),
      cardNumber: Yup.string().required('O campo é obrigatório.'),
      cardCode: Yup.string().required('O campo é obrigatório.'),
      cep: Yup.string().required('O campo é obrigatório.'),
      expiresMonth: Yup.string().required('O campo é obrigatório.'),
      expiresYear: Yup.string().required('O campo é obrigatório.'),
    }),
    onSubmit: async (values) => {
      dispatch(
        updatePayment({
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: values.cardCode,
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear),
            },
          },
        })
      );

      dispatch(
        updateDelivery({
          receiver: receiver,
          address: address,
        })
      );

      continueToConfirmation(values);
    },
  });

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;

    if (isTouched && isInvalid) return message;
    return '';
  };

  return (
    <form onSubmit={form.handleSubmit}>
      <CardContainer>
        <Overlay onClick={returnToDelivery} />
        <Sidebar>
          <h3>Pagamento - Valor a pagar {parseToBrl(getTotalPrice())}</h3>
          <div>
            <label htmlFor="cardDisplayName">Nome no cartão</label>
            <input
              id="cardDisplayName"
              type="text"
              value={form.values.cardDisplayName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('cardDisplayName', form.errors.cardDisplayName)}
            </small>
          </div>
          <div>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input
              id="cardNumber"
              type="text"
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('cardNumber', form.errors.cardNumber)}
            </small>
          </div>
          <div>
            <label htmlFor="cardCode">CVV</label>
            <input
              id="cardCode"
              type="text"
              value={form.values.cardCode}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('cardCode', form.errors.cardCode)}</small>
          </div>
          <div>
            <label htmlFor="cep">CEP</label>
            <input
              id="cep"
              type="text"
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('cep', form.errors.cep)}</small>
          </div>
          <div>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <input
              id="expiresMonth"
              type="text"
              value={form.values.expiresMonth}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
            </small>
          </div>
          <div>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <input
              id="expiresYear"
              type="text"
              className="margin-bottom"
              value={form.values.expiresYear}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('expiresYear', form.errors.expiresYear)}
            </small>
          </div>
          <Button
            type="button"
            title="Clique aqui para continuar com a entrega"
            onClick={form.handleSubmit}
          >
            Continuar com a entrega
          </Button>
          <Button
            type="submit"
            title="Clique aqui para retornar a edição de endereço"
            onClick={returnToDelivery}
          >
            Voltar para a edição de endereço
          </Button>
        </Sidebar>
      </CardContainer>
    </form>
  );
};

export default Payment;
