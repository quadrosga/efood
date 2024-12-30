import styled from 'styled-components';
import { colors } from '../../styles';

export const BannerContainer = styled.div<{ image: string }>`
  position: relative;
  width: 100%;
  height: 280px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  font-size: 32px;
  position: relative;
  color: ${colors.white};
`;

export const BannerContent = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export const Infos = styled.div`
  font-size: 32px;
  font-weight: 100;
  position: absolute;
  left: 170px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  position: absolute;
  bottom: 32px;
  left: 170px;
`;
