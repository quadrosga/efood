import styled from 'styled-components';
import { colors } from '../../styles';
import { ButtonContainer } from '../Button/styles';
import trash from '../../assets/images/lixeira.png';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`;
export const Sidebar = styled.aside`
  background-color: ${colors.hotPink};
  color: ${colors.lightPink};
  z-index: 1;
  padding: 32px 8px 0 8px;
  font-weight: bold;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`;

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.lightPink};
  padding: 8px;
  position: relative;
  color: ${colors.hotPink};
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-weight: normal;
    font-size: 14px;
  }

  button {
    background-image: url(${trash});
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    padding: 0;
  }
`;

export const Prices = styled.p`
  color: ${colors.lightPink};
  font-size: 14px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;
