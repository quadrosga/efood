import styled from 'styled-components';
import { colors } from '../../styles';

export const Card = styled.div`
  width: 472px;
  border: 1px solid ${colors.hotPink};
  background-color: ${colors.white};
  margin-bottom: 48px;
  position: relative;
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  gap: 8px;
`;

export const Titulo = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nota = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 20px;
    margin-left: 8px;
  }
`;

export const Descricao = styled.div`
  font-size: 14px;
  padding: 8px;

  p {
    margin: 8px 0;
    line-height: 22px;
    text-align: left;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`;
