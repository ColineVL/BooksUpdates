import React, { Component } from 'react';
import {
  Container, Form, Segment,
} from 'semantic-ui-react';

class SearchAnAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmitSearchAuthor = () => {
      const { name } = this.state;
      console.log(name);
    }

    render() {
      const { name } = this.state;

      return (
        <Container>
          <Form onSubmit={this.handleSubmitSearchAuthor}>
            <Form.Group>
              <Form.Input
                inline
                placeholder={"Nom de l'auteur"}
                name="name"
                value={name}
                onChange={this.handleChange}
                label={"Nom de l'auteur"}
              />
              <Form.Button type="submit">Chercher</Form.Button>
            </Form.Group>
          </Form>

          <Segment>Work in progress</Segment>
        </Container>

      );
    }
}

export { SearchAnAuthor };
