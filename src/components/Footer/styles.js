import styled from 'styled-components';
import { Colors } from '../../resources'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
  background: ${Colors.footer};
  width:  100%;
  height: 150px;
`;

export const Link = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: white;
  margin-right: 20px;
  cursor: pointer;
  text-decoration: none;
`;

export const Copyright = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: white;
  margin-right: 40px;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  padding:30px;
  display: flex;
  flex-direction:${({ direction }) => direction || 'row'};
`;

