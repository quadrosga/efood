import styled from 'styled-components';
import { colors } from '../../styles';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightPink};
  padding: 40px 0;
  margin-top: 72px;
`;

export const IconsContainer = styled.div`
  margin: 32px 0 80px 0;
`;

export const IconsList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Disclaimer = styled.div`
  max-width: 480px;
  font-size: 10px;
  text-align: center;
`;
