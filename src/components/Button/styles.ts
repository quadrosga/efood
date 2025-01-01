import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../styles';
import { Props } from '.';

export const ButtonContainer = styled.button<Props>`
  display: flex;
  color: ${colors.hotPink};
  font-weight: bold;
  font-size: 14px;
  background-color: ${colors.lightPink};
  padding: 4px 0;
  border-radius: 0;
  width: 100%;
  height: 24px;
  align-items: center;
  justify-content: center;

  &:hover {
    border: none;
  }
`;
export const ButtonLink = styled(Link)`
  display: block;
  width: 82px;
  color: ${colors.lightPink};
  font-weight: bold;
  font-size: 14px;
  padding: 4px 6px;
  text-decoration: none;
  background-color: ${colors.hotPink};

  &:hover {
    color: ${colors.lightPink};
  }
`;
