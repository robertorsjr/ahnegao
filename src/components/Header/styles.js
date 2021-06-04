import styled from 'styled-components';
import { Colors } from '../../resources'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px 5px 60px;
  background: ${Colors.header};
  position: fixed;
  width:  100%;
  height: 144px;
`;

export const Image = styled.div`
  background: ${({ img }) => `url(${img})`} no-repeat;
  background-size: contain;
  width: 414px;
  height: 138px;
  margin-left: 20px;
  margin-top: 5px;
`;

export const Link = styled.div`
  font-family: "Carter One", display;
  font-size: 18px;
  font-weight: 700;
  color: white;
  margin-right: 48px;
  cursor: pointer;
  &:hover{ 
    color: ${Colors.fontHeaderHover}
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

