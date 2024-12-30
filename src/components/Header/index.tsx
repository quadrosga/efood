import { Link, useLocation } from 'react-router-dom';
import {
  Image,
  TituloContainer,
  HeaderContainer,
  ProfileHeader,
} from './styles';
import bannerPattern from '../../assets/images/banner_pattern.png';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const location = useLocation();
  const isProfilePage = location.pathname.startsWith('/profile');

  return isProfilePage ? (
    <ProfileHeader style={{ backgroundImage: `url(${bannerPattern})` }}>
      <Link to="/">Restaurantes</Link>
      <img src={logo} alt="EFOOD" />
      <Link to="/cart">0 - produto(s) no carrinho</Link>
    </ProfileHeader>
  ) : (
    <Image style={{ backgroundImage: `url(${bannerPattern})` }}>
      <HeaderContainer className="container">
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
