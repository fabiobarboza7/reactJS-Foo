import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => (props.fabio ? 'red' : 'green')};
  font-family: Arial, Helvetica, sans-serif;
`;

export const Container = styled.div`
  background: tomato;
`;
