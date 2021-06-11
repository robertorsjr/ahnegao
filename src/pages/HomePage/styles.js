import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction:${({ direction }) => direction || 'row'};
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: white;
  cursor: pointer;
`;
