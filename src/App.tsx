import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import { GlobalStyle } from './styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';
import { store } from './store';
import Cart from './components/Cart';
import AppFlow from './AppFlow';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
        <Footer />
        <Cart />
        <AppFlow />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
