import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../styles';
import { Props } from '.';

export const ButtonContainer = styled.button<Props>`
  color: ${(props) =>
    props.type === 'link' ? colors.lightPink : colors.hotPink};
  font-weight: bold;
  font-size: 14px;
  background-color: ${(props) =>
    props.type === 'link' ? colors.hotPink : colors.lightPink};
  padding: 4px auto;
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
    ${colors.lightPink};
  }
`;
