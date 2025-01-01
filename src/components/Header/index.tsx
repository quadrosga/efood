import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Image,
  TituloContainer,
  HeaderContainer,
  ProfileHeader,
  CartButton,
} from './styles';
import bannerPattern from '../../assets/images/banner_pattern.png';
import logo from '../../assets/images/logo.png';
import { open } from '../../store/reducers/cart';
import { RootReducer } from '../../store';

const Header = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const location = useLocation();
  const isProfilePage = location.pathname.startsWith('/profile');

  const openCart = () => {
    dispatch(open());
  };

  return isProfilePage ? (
    <ProfileHeader style={{ backgroundImage: `url(${bannerPattern})` }}>
      <Link to="/">Restaurantes</Link>
      <img src={logo} alt="EFOOD" />
      <CartButton onClick={openCart}>
        {items.length} - produto(s) no carrinho
      </CartButton>
    </ProfileHeader>
  ) : (
    <Image style={{ backgroundImage: `url(${bannerPattern})` }}>
      <HeaderContainer>
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
        <TituloContainer>
          <h1>
            Viva experiências gastronômicas <br /> no conforto da sua casa
          </h1>
        </TituloContainer>
      </HeaderContainer>
    </Image>
  );
};

export default Header;
