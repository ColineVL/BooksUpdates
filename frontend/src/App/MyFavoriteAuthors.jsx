// Libraries
import React, { Component } from 'react';
import {
    Container, Header,
} from 'semantic-ui-react';

// Components
import { FavoritesTable } from '../Components';

/**
 * All the favorite authors in the database, with links to their pages on the BNF website.
 */
class MyFavoriteAuthors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // True when we have an answer from the backend. While it is false, we do not show the results table.
            loaded: false,
            // The list to display.
            listAuthors: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/authors/favorites')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    listAuthors: responseJson.data,
                    loaded: true,
                });
            });
    }

    render() {
        return (
            <Container>
                <Header as="h3">Auteurs favoris</Header>
                {
                    this.state.loaded && (
                        <FavoritesTable
                            tableValues={this.state.listAuthors}
                        />
                    )
                }
            </Container>
        );
    }
}

export { MyFavoriteAuthors };
