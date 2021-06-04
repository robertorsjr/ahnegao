import styled from 'styled-components';
import { Colors } from '../../resources'

export const Container = styled.div`
  background: white;
  width: 843px;
  padding: 20px;
  margin-bottom: 30px;
`;

export const HtmlContent = styled.div`
 display: flex;
 flex-direction: column;
 width:  100%;
`;

export const Line = styled.div`
  background: ${Colors.gray};
  height: 1px;
  width:100%;
`;

export const Title = styled.a`
  font-family: "Carter One", display;
  font-size: 30px;
  color: ${Colors.fontHeaderHover};
  margin-right: 40px;
  margin-bottom: 10px;
  text-decoration: none;
  cursor: pointer;
  &:hover{
    color: ${Colors.footer}
  }
`;

export const Date = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #676767;
  margin-bottom: 5px;
`;

