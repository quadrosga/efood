import { Link } from 'react-router-dom';
import { Image, TituloContainer, HeaderContainer } from './styles';
import bannerPattern from '../../assets/images/banner_pattern.png';
import logo from '../../assets/images/logo.png';

const Header = () => (
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

export default Header;
