import React, { Component } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';
import '../../styles/main.css';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import api from '../../services/api';
import { Container, Form, SubmitButton, List } from './styles';

export default class Main extends Component {
  state = {
    newGif: '',
    gifsCollection: [],
    loading: false,
  };

  handleInputChange = e => {
    this.setState({ newGif: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    const { newGif, gifsCollection } = this.state;

    const response = await api.get(
      `/search?api_key=jU6ab4lFD2HaKsegBe5HFVT4v1Yc54tx&q=${newGif}&limit=10&offset=0&rating=G&lang=en`
    );

    this.setState({
      gifsCollection: [...gifsCollection, response.data.data],
      newGif: '',
      loading: false,
    });
  };

  render() {
    const { gifsCollection, newGif, loading } = this.state;
    return (
      <>
        <Header />
        <Container>
          <h1>Time to search your gif</h1>
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search a gif"
              value={newGif}
              onChange={this.handleInputChange}
            />
            <SubmitButton loading={loading ? 1 : 0}>
              {loading ? (
                <FaSpinner color="#fff" size={15} />
              ) : (
                <FaSearch color="#fff" size={15} />
              )}
            </SubmitButton>
          </Form>

          <List>
            {gifsCollection.map(gifs =>
              gifs.map(gif => (
                <li key={gif.id}>
                  <figure>
                    <img src={gif.images.fixed_width.url} alt={gif.title} />
                    <figcaption>{gif.title}</figcaption>
                  </figure>
                </li>
              ))
            )}
          </List>
        </Container>
        <Footer />
      </>
    );
  }
}
