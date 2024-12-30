import { BrowserRouter } from 'react-router';
import { GlobalStyle } from './styles';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
