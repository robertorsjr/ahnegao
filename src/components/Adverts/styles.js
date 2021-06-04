import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 560px;
  margin-left: 17px;
`;

export const Line = styled.div`
  background-color: white;
  height: 4px;
  width: 100%;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  margin-top: ${({ top }) => top}px;
  display: flex;
  flex-direction:${({ direction }) => direction || 'row'};
  justify-content: space-between;
`;


export const Image = styled.div`
  background: ${({ img }) => `url(${img})`} no-repeat;
  background-size: cover;
  width: 300px;
  height: ${({ y }) => y}px;
  cursor: pointer;
`;