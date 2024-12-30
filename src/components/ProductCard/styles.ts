import styled from 'styled-components';
import { colors } from '../../styles';

export const Card = styled.div`
  width: 320px;
  background-color: ${colors.hotPink};
  padding: 8px;
  margin-bottom: 32px;
  color: ${colors.lightPink};
  text-align: left;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 167px;
  max-width: 304px;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 22px;
`;
