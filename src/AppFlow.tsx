import { useSelector } from 'react-redux';
import { RootReducer } from './store';
import Delivery from './components/Delivery';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import Cart from './components/Cart';

function AppFlow() {
  const { currentStep } = useSelector((state: RootReducer) => state.app);
  console.log(currentStep);
  switch (currentStep) {
    case 'cart':
      return <Cart />;
    case 'delivery':
      return <Delivery />;
    case 'payment':
      return <Payment />;
    case 'confirmation':
      return <Confirmation />;
    default:
      return null;
  }
}

export default AppFlow;
