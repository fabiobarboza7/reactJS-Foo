import styled from 'styled-components';
import img from '../../Main/images/logo.png';

export const Navbar = styled.header`
  padding: 10px;
  background: linear-gradient(55deg, tomato, purple);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
`;

export const Text = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  letter-spacing: 0.6px;
  color: white;
`;
