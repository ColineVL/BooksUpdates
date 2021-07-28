import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'home',
        };
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;
        return (

            <Segment inverted>
                <Menu inverted secondary>
                    <Menu.Item header href="/">Books Updates</Menu.Item>
                    <Menu.Item
                        href="searchAnAuthor"
                        name="search"
                        active={activeItem === 'search'}
                        onClick={this.handleItemClick}
                    >
              Chercher un auteur
                    </Menu.Item>
                    <Menu.Item
                        href="myAuthors"
                        name="list"
                        active={activeItem === 'list'}
                        onClick={this.handleItemClick}
                    >
              Voir ma liste d&apos;auteurs
                    </Menu.Item>
                </Menu>
            </Segment>

        );
    }
}

export { NavBar };
