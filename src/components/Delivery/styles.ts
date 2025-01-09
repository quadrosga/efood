import styled from 'styled-components';
import { colors } from '../../styles';
import { ButtonContainer } from '../Button/styles';

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

  h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  label {
    font-size: 14px;
  }

  input {
    background-color: ${colors.lightPink};
    border: 1px solid ${colors.lightPink};
    height: 32px;
    width: 100%;
    margin-bottom: 8px;
    margin-top: 8px;

    &.margin-bottom {
      margin-bottom: 24px;
    }
  }

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    margin-bottom: 8px;
  }
`;
