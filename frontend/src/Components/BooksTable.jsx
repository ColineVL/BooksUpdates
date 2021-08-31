// Libraries
import PropTypes from 'prop-types';
import React from 'react';
import { Table, Header, Icon } from 'semantic-ui-react';

/**
 * A Semantic table, simplified for this project. If there are no values to display, shows an error message.
 */
function BooksTable(props) {
    if (props.tableValues && props.tableValues.length > 0) {
        const tableData = props.tableValues;
        const headerRow = ['Titre', 'Date de parution'];

        const renderBodyRow = ({
            title, date,
        }, i) => ({
            key: title || `row-${i}`,
            cells: [
                { key: 'title', content: title || 'Pas de titre' },
                { key: 'date', content: date || 'Pas de date' },
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
                   Aucun livre trouvé.
            </Header.Subheader>
        </Header>
    );
}

BooksTable.propTypes = {
    // The values to display in the table
    tableValues: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    })),
};

BooksTable.defaultProps = {
    tableValues: [],
};

export { BooksTable };
