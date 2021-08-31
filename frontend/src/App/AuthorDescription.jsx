// Libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Container, Header,
} from 'semantic-ui-react';

// Components
import { BooksTable } from '../Components';

// Controllers
import { listBooksFromAuthor } from '../controllers/authors';

/**
 * The author's page. All his or her books.
 */
class AuthorDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // The name of the author.
            name: '',
            // True when we have an answer from the backend. While it is false, we do not show the results table.
            loaded: false,
            // The list of the books.
            listBooks: [],
        };
    }

    componentDidMount() {
        listBooksFromAuthor(this.props.match.params.id)
            .then((response) => {
                this.setState({
                    listBooks: response.data,
                    loaded: true,
                });
            });
    }

    render() {
        return (
            <Container>
                {/* TODO add a description, with a picture next to the name ? */}
                <Header as="h3">{this.state.name}</Header>

                {
                    this.state.loaded && (
                        <BooksTable
                            tableValues={this.state.listBooks}
                        />
                    )
                }

            </Container>

        );
    }
}

AuthorDescription.propTypes = {
    // TODO required ?
    // The values to display in the table
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }).isRequired,
};

export { AuthorDescription };
