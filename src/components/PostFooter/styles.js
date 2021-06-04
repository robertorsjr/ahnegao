import styled from 'styled-components';
import { Colors } from '../../resources'

export const Image = styled.div`
  background: ${({ img }) => `url(${img})`} no-repeat;
  background-size: contain;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  margin-right: 5px;
`;

export const Wrapper = styled.div`
  margin-top: ${({ top }) => top}px;
  display: flex;
  flex-direction:${({ direction }) => direction || 'row'};
  justify-content: ${({ space }) => space && 'space-between'};
`;

export const Row = styled.div`
 align-items: center;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content:${({ justify }) => justify || 'space-between'};
`;

export const Text = styled.a`
  font-size: ${({ size }) => size || 18}px;
  font-weight: 700;
  color: ${Colors.fontHeaderHover};
  cursor: pointer;
  text-decoration: none;
  :hover{
    color: ${Colors.fontFooter}
  }
`;

export const Coment = styled.span`
  font-size: ${({ size }) => size || 18}px;
  font-weight: 700;
  display: flex;
  align-items: center;
  color: ${Colors.fontHeaderHover};
  cursor: pointer;
  :hover{
    color: ${Colors.fontFooter}
  }
`;

export const Title = styled.div`
  font-size: ${({ size }) => size || 16}px;
  font-weight: ${({ weight }) => weight || 400};
  color: #3a3a3a;
  margin-bottom: ${({ bottom }) => bottom && 10}px;
`;