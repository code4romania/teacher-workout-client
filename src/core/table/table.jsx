import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types'
import _ from 'lodash';

import Box from '@mui/material/Box';
import {
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    Paper,
    Checkbox,
    Radio,
    CircularProgress
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

/*
    @columns: Array of objects
    @column: {
        id: Unique identifier
        accessor: Property to be accessed
        label: Header label
        template: custom template
    }
*/

export const Table = ({
    data,
    columns = [],
    loading = false,
    onRowClick = _.noop,
    onRowSelect = _.noop,
    defaultOrder = 'asc',
    defaultOrderBy = '',
    multiSelect = false
}) => {
    const [order, setOrder] = useState(defaultOrder);
    const [orderBy, setOrderBy] = useState(defaultOrderBy);
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const processedData = useMemo(() => {
        return data.map(entry => {
            return {
                original: entry,
                _id: _.uniqueId('table__entry__')
            };
        });
    }, [data]);

    const processedColumns = useMemo(() => columns.filter(({ show = true }) => show));

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleClick = (event, rawInfo) => {
        const selectedIndex = selected.findIndex(entry => entry._id === rawInfo._id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, rawInfo);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        if (!multiSelect) {
            newSelected = [rawInfo];
        }

        setSelected(newSelected);
        onRowSelect(newSelected);
        onRowClick(rawInfo);
    };

    const createSortHandler = (property) => (event) => {
        handleRequestSort(event, property);
    };

    const isSelected = (id) => selected.findIndex((entry) => entry._id === id) !== -1;

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - processedData.length) : 0;

    const renderTableHead = () => {
        return (
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    {processedColumns.map(({ id, accessor = '', label, style }) => {
                        return (
                            <TableCell
                                sx={{ ...style }}
                                key={id}
                                sortDirection={orderBy === accessor ? order : false}>
                                <TableSortLabel
                                    active={orderBy === accessor}
                                    direction={orderBy === accessor ? order : 'asc'}
                                    onClick={createSortHandler(accessor)}
                                >
                                    {label}
                                    {orderBy === accessor ? (
                                        <Box component="span" sx={visuallyHidden}>
                                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                        </Box>
                                    ) : null}
                                </TableSortLabel>
                            </TableCell>
                        )
                    })}
                </TableRow>
            </TableHead>
        )
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    function getComparator(order, orderBy) {
        return order === "desc"
            ? (a, b) => descendingComparator(a.original, b.original, orderBy)
            : (a, b) => -descendingComparator(a.original, b.original, orderBy);
    }

    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    const renderSelectCell = (checked, labelId) => {
        const multiSelectCell = (
            <TableCell padding="checkbox">
                <Checkbox
                    color="primary"
                    checked={checked}
                    inputProps={{
                        'aria-labelledby': labelId,
                    }}
                />
            </TableCell>
        );

        const singleSelectCell = (
            <TableCell padding="checkbox">
                <Radio
                    checked={checked}
                    name="radio-button"
                    inputProps={{ 'aria-labelledby': labelId }}
                />
            </TableCell>
        );
        return multiSelect ? multiSelectCell : singleSelectCell;
    }

    const renderTableBody = () => {
        return (
            <TableBody>
                {stableSort(processedData, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                        const isItemSelected = isSelected(row._id);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                            <TableRow
                                hover
                                onClick={(event) => handleClick(event, row)}
                                role="checkbox"
                                aria-checked={isItemSelected}
                                tabIndex={-1}
                                key={row.name}
                                selected={isItemSelected}
                                sx={{ height: '100px' }}
                            >
                                {onRowSelect !== _.noop && renderSelectCell(isItemSelected, labelId)}
                                {processedColumns.map(column => {
                                    const Template = column.template;


                                    return Template ? (
                                        <TableCell>
                                            <Template row={row} />
                                        </TableCell>
                                    ) : (
                                        <TableCell>
                                            {row.original[column.accessor]}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        );
                    })}
                {emptyRows > 0 && (
                    <TableRow>
                        <TableCell colSpan={6} />
                    </TableRow>
                )}
            </TableBody>
        )
    }

    const tableContainer = (
        <>
            <TableContainer>
                <MuiTable sx={{ minWidth: 750, height: 500 }}>
                    {renderTableHead()}
                    {renderTableBody()}
                </MuiTable>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={processedData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                {loading ? <div style={{height: 500, display: 'flex', justifyContent: 'center', alignItems: 'center'}}><CircularProgress /></div> : tableContainer}
            </Paper>
        </Box>
    )
};

Table.propTypes = { columns: PropTypes.array, data: PropTypes.array }