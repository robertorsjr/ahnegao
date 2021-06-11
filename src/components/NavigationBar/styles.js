import styled from 'styled-components';
import { Colors } from '../../resources'

export const Container = styled.div`
  height: 60px;
  display:flex;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  justify-content: space-between;
`;

export const Button = styled.div`
  height: 46px;
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-top: 13px;
  padding: 0 30px;
  cursor: pointer;
  color: white;
  border-style: solid;
  border-width: 1px;
  border-color: ${Colors.fontHeaderHover};
  &:hover{
    background: ${Colors.fontHeaderHover}
  }
`;