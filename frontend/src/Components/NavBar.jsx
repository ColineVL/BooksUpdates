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
            <Menu.Item header>Books Updates</Menu.Item>
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="list"
              active={activeItem === 'list'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Segment>

      );
    }
}

export { NavBar };
