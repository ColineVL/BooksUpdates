// Libraries
import React, { Component } from 'react';
import {
    Container, Divider, Header,
} from 'semantic-ui-react';

// Components
import { SearchResultTable, FormAuthorName } from '../Components';

// Controllers
import { searchAuthor } from '../controllers/authors';

/**
 * Page to search for an author based on his or her name.
 * Includes a form to enter the name, and the table with all the results.
 */
class SearchAnAuthor extends Component {
    constructor(props) {
        super(props);
        this.handleSubmitSearchAuthor = this.handleSubmitSearchAuthor.bind(this);
        this.state = {
            // The name of the author.
            name: '',
            // True when we have an answer from the backend. While it is false, we do not show the results table.
            loaded: false,
            // The result of the search.
            listAuthors: [],
        };
    }

    /**
     * Executes when the form is completed. Takes the name entered by the user, and sends a request to the backend.
     * When the answer is received, updates the state with the info.
     * @param name
     */
    handleSubmitSearchAuthor = (name) => {
        searchAuthor(name)
            .then((response) => {
                this.setState({
                    listAuthors: response.data,
                    loaded: true,
                    name,
                });
            });
    }

    render() {
        return (
            <Container>
                <Header as="h3">Cherchez un auteur</Header>

                <FormAuthorName handleSubmit={this.handleSubmitSearchAuthor} />

                <Divider />

                <Header as="h3">
                    Résultats de la recherche
                    <Header.Subheader>
                        {this.state.loaded
                            ? `Résultats pour "${this.state.name}"`
                            : 'En attente de la recherche'}
                    </Header.Subheader>
                </Header>

                {
                    this.state.loaded && (
                        <SearchResultTable
                            tableValues={this.state.listAuthors}
                        />
                    )
                }

            </Container>

        );
    }
}

export { SearchAnAuthor };
