import React from 'react';
import { Link } from '@mui/material';
import { Table } from './table';

export const TableExample = () => {
    const genericAction = (event, action, row) => {
        console.log(`${action} `, row)
        event.stopPropagation();
    }

    const columns = [
        {
            id: 'lessonName',
            accessor: 'lessonName',
            label: 'DENUMIRE LECTIE'
        },
        {
            id: 'category',
            accessor: 'category',
            label: 'CATEGORIE',
        },
        {
            id: 'status',
            accessor: 'status',
            label: 'STATUS',
        },
        {
            id: 'actions',
            label: 'ACTIUNI',
            template: ({row}) => {
                return (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <Link underline="none" onClick={(e) => genericAction(e, 'EDIT: ', row)}>Editeaza</Link>
                        <Link underline="none" onClick={(e) => genericAction(e, 'DUPLICATE: ', row)}>Duplica lectie</Link>
                        <Link underline="none" onClick={(e) => genericAction(e, 'DELETE: ', row)}>Sterge</Link>
                    </div>
                )
            },
            style: {
                minWidth: '180px',
            }
        }
    ];

    const data = [
        {
            lessonName: 'Asertivitate si managementul conflictelor1',
            category: 'One',
            status: 'Publicata',
        },
        {
            lessonName: 'Asertivitate si managementul conflictelor2',
            category: 'One',
            status: 'Publicata',
        },
        {
            lessonName: 'Asertivitate si managementul conflictelor3',
            category: 'One',
            status: 'Publicata',
        },
        {
            lessonName: 'Asertivitate si managementul conflictelor4',
            category: 'One',
            status: 'Publicata',
        },
        {
            lessonName: 'Asertivitate si managementul conflictelor5',
            category: 'One',
            status: 'Publicata',
        },
        {
            lessonName: 'Asertivitate si managementul conflictelor6',
            category: 'One',
            status: 'Publicata',
        }
    ]

    return (
        <Table 
            columns={columns}
            data={data}
            onRowSelect={rows => console.log(rows)}
            onRowClick={row => console.log(row)} 
            loading={false}
            defaultOrder={'asc'}
            defaultOrderBy={'lessonName'}
            multiSelect={false}
        />
    )
};