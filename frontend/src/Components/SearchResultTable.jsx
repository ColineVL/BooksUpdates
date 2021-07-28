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
        const headerRow = ['Link', 'Name', 'Birth', 'Death'];

        const renderBodyRow = ({
            link, name, birth, death,
        }, i) => ({
            key: link || `row-${i}`,
            cells: [
                link?.value,
                name?.value,
                birth?.value,
                death?.value,
            ],
        });
        return (
            <Table
                celled
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
