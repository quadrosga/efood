import {
  FooterContainer,
  IconsContainer,
  IconsList,
  Disclaimer,
} from './styles';
import logo from '../../assets/images/logo.png';
import insta from '../../assets/images/instagram.png';
import fb from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="logo" />
    <IconsContainer>
      <IconsList>
        <li>
          <img src={insta} alt="instagram" />
        </li>
        <li>
          <img src={fb} alt="facebook" />
        </li>
        <li>
          <img src={twitter} alt="twitter" />
        </li>
      </IconsList>
    </IconsContainer>
    <Disclaimer>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </Disclaimer>
  </FooterContainer>
);

export default Footer;
