import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../../styles/main.css';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <>
      <Header />
      <Container>
        <h1>Time to search your gif</h1>
        <Form>
          <input type="text" placeholder="Search a gif" />
          <SubmitButton disabled>
            <FaSearch color="#fff" size={15} />
          </SubmitButton>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
