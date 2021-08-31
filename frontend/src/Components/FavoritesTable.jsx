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
            link, name,
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
                        // TODO modifier link ici, on veut avoir la liste des livres écrits par l'auteur
                        <a href={link} target="_blank" rel="noreferrer">
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
    // TODO specify what is in the array. Define a format ?
    tableValues: PropTypes.arrayOf(PropTypes.object),
};

FavoritesTable.defaultProps = {
    tableValues: [],
};

export { FavoritesTable };
