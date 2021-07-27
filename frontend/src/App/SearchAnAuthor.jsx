import React, { Component } from 'react';
import {
    Container, Form, Segment, Table,
} from 'semantic-ui-react';
import { searchAuthor } from '../controllers/authors';

class SearchAnAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            listAuthors: [],
            tableLoaded: false,
        };
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmitSearchAuthor = () => {
        const { name } = this.state;
        searchAuthor(name)
            .then((response) => {
                this.setState({
                    listAuthors: response.data,
                    tableLoaded: true,
                });
            });
    }

  printResultTable = () => {
      const tableData = this.state.listAuthors.results;
      const headerRow = ['Link', 'Name', 'Birth', 'Death'];

      const renderBodyRow = ({
          link, name, birth, death,
      }, i) => ({
          key: name || `row-${i}`,
          cells: [
              link?.value || 'No name specified',
              name?.value,
              birth?.value,
              death?.value,
          ],
      });

      return (
          <Table
              celled
              headerRow={headerRow}
              renderBodyRow={renderBodyRow}
              tableData={tableData}
          />
      );
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
              {this.state.tableLoaded && this.printResultTable()}

          </Container>

      );
  }
}

export { SearchAnAuthor };
