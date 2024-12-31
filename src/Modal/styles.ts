import styled from 'styled-components';
import { colors } from '../styles';
import { ButtonContainer } from '../components/Button/styles';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: ${colors.hotPink};
  color: ${colors.lightPink};
  position: relative;
  z-index: 1;

  ${ButtonContainer} {
    width: 218px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  padding: 32px;
  text-align: left;

  .details {
    margin-left: 24px;
  }

  p {
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 14px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
