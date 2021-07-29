// Libraries
import PropTypes from 'prop-types';
import React from 'react';
import { Table, Header, Icon } from 'semantic-ui-react';

/**
 * A Semantic table, simplified for this project. If there are no values to display, shows an error message.
 */
function SearchResultTable(props) {
    if (props.tableValues && props.tableValues.length > 0) {
        const tableData = props.tableValues;
        const headerRow = ['Nom', 'Date de naissance', 'Date de décès', 'Lien BNF', 'Favori'];

        const renderBodyRow = ({
            link, name, birth, death, favorite,
        }, i) => ({
            key: link || `row-${i}`,
            cells: [
                { key: 'name', content: name || 'Pas de nom' },
                { key: 'birth', content: birth || 'Pas de date' },
                { key: 'death', content: death || 'Pas de date' },
                {
                    key: 'link',
                    collapsing: true,
                    content: (
                        <a href={link} target="_blank" rel="noreferrer">
                            <Icon name="linkify" />
                        </a>
                    ),
                },
                {
                    key: 'fav',
                    collapsing: true,
                    content: favorite
                        ? <Icon name="star" color="yellow" link />
                        : <Icon name="star outline" link />,
                },
                // TODO clicking on the star, we should be able to add an author to the favorites (or remove from)
            ],
        });
        return (
            <Table
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
                    Réessayez en faisant bien attention à la casse.
            </Header.Subheader>
        </Header>
    );
}

SearchResultTable.propTypes = {
    // The values to display in the table
    // TODO specify what is in the array. Define a format ?
    tableValues: PropTypes.arrayOf(PropTypes.object),
};

SearchResultTable.defaultProps = {
    tableValues: [],
};

export { SearchResultTable };
