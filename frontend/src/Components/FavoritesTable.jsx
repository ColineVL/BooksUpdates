// Libraries
import PropTypes from 'prop-types';
import React from 'react';
import { Table, Header, Icon } from 'semantic-ui-react';

/**
 * A Semantic table, simplified for this project. If there are no values to display, shows an error message.
 */
function FavoritesTable(props) {
    if (props.tableValues && props.tableValues.length > 0) {
        const tableData = props.tableValues;
        const headerRow = ['Lien BNF', 'Nom', 'Voir les oeuvres'];

        const renderBodyRow = ({
            link, name, id,
        }, i) => ({
            key: link || `row-${i}`,
            cells: [
                {
                    key: 'link',
                    collapsing: true,
                    textAlign: 'center',
                    content: (
                        <a href={link} target="_blank" rel="noreferrer">
                            <Icon name="linkify" />
                        </a>
                    ),
                },
                { key: 'name', content: name || 'Pas de nom' },
                {
                    key: 'books',
                    collapsing: true,
                    textAlign: 'center',
                    content: (
                        // TODO then we have a problem if we click on a link in the navbar
                        <a href={`authorDescription/${id}`}>
                            <Icon name="book" />
                        </a>
                    ),
                },
            ],
        });
        return (
            <Table
                singleLine
                celled
                selectable
                headerRow={headerRow}
                renderBodyRow={renderBodyRow}
                tableData={tableData}
            />
        );
    }
    return (
        <Header as="h2" icon>
            <Icon name="frown outline" />
                Aucun résultat
            <Header.Subheader>
                    Cherchez un auteur pour l&apos;ajouter en favori.
            </Header.Subheader>
        </Header>
    );
}

FavoritesTable.propTypes = {
    // The values to display in the table
    tableValues: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })),
};

FavoritesTable.defaultProps = {
    tableValues: [],
};

export { FavoritesTable };
