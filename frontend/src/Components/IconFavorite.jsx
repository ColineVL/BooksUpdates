// Libraries
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

// Controllers
import { upsertAuthor } from '../controllers/authors';

/**
 * A star icon for an author : a full star if it is a favorite, or only a star outline if it is not.
 */
class IconFavorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: props.favorite,
        };
    }

    render() {
        let iconName = 'star outline';
        if (this.state.favorite) {
            iconName = 'star';
        }
        return (
            <Icon
                name={iconName}
                color="yellow"
                link
                onClick={() => {
                    const authorUpsertInfo = this.props.authorInfo;
                    authorUpsertInfo.favorite = !this.state.favorite;
                    upsertAuthor(authorUpsertInfo)
                        .then((resultUpsert) => {
                            if (resultUpsert.ok) {
                                this.setState((state) => ({
                                    favorite: !state.favorite,
                                }));
                            } else {
                                // TODO if there is an error ?
                            }
                        });
                }}
            />
        );
    }
}

IconFavorite.propTypes = {
    // TODO add explanations
    authorInfo: PropTypes.objectOf({
        name: PropTypes.string,
        death: PropTypes.string,
        birth: PropTypes.string,
        link: PropTypes.string.isRequired,
    }).isRequired,
    favorite: PropTypes.bool.isRequired,
};

export { IconFavorite };
