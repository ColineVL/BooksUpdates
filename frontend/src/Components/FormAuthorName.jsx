// Libraries
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

/**
 * A form to enter an author's name.
 */
class FormAuthorName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // The name entered by the user.
            name: '',
        };
    }

    /**
     * Executes each time the user changes their input.
     */
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render() {
        return (
            <Form onSubmit={() => this.props.handleSubmit(this.state.name)}>
                <Form.Group>
                    <Form.Input
                        inline
                        placeholder={"Nom de l'auteur"}
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        label={"Nom de l'auteur"}
                    />
                    <Form.Button type="submit">Chercher</Form.Button>
                </Form.Group>
            </Form>
        );
    }
}

FormAuthorName.propTypes = {
    // The function to execute when the form is completed. Takes only one argument, the name entered by the user.
    handleSubmit: PropTypes.func.isRequired,
};

export { FormAuthorName };
