import styled from 'styled-components';
import { colors } from '../../styles';

export const Image = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-top: 60px;
  padding-bottom: 40px;
`;

export const TituloContainer = styled.div`
  color: ${colors.hotPink};

  h1 {
    font-size: 36px;
    font-weight: bold;
  }
`;
