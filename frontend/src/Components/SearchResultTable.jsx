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
        const headerRow = ['Nom', 'Date de naissance', 'Date de décès', 'Lien BNF'];

        const renderBodyRow = ({
            link, name, birth, death,
        }, i) => ({
            key: link?.value || `row-${i}`,
            cells: [
                { key: 'name', content: name?.value || 'Pas de nom' },
                { key: 'birth', content: birth?.value || 'Pas de date' },
                { key: 'death', content: death?.value || 'Pas de date' },
                {
                    key: 'link',
                    collapsing: true,
                    content: (
                        <a href={link?.value} target="_blank" rel="noreferrer">
                            <Icon name="linkify" />
                        </a>
                    ),
                },
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
