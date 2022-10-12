import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';


interface VacantTableProps {
    array: Array<Object>;
}

const VacantTable: React.FC<VacantTableProps> = ({
    array,
}) => {
    console.log("ARRAY", array)

    const columns: GridColDef[] = [
        { field: 'rowKey', headerName: 'email', width:100},
        { field: 'name', headerName: 'Navn', width: 130 },
        { field: 'stilling', headerName: 'Stilling', width: 130 },
        { field: 'capacity', headerName: 'Kapasitet', type: 'number', width: 130 },
        { field: 'freeTill', headerName: 'Ledig til', width: 130 },
        { field: 'timestamp', headerName: 'Sist oppdatert', width: 130 },
        // {
        //     field: 'fullName',
        //     headerName: 'Full name',
        //     description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     width: 160,
        //     valueGetter: (params: GridValueGetterParams) =>
        //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
    ];

    const rows = array
    
    // const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    // ];



    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.rowKey}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
        
    )
}
    
  





export default VacantTable;
