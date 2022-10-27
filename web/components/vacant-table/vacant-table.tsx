import { 
    DataGrid, 
    GridColDef, 
    GridToolbarContainer, 
    GridToolbarExport 
} from '@mui/x-data-grid';
import { AzureVacant } from '../../models/azure-vacant';


interface VacantTableProps {
    vacants: AzureVacant[];
}

const VacantTable: React.FC<VacantTableProps> = ({
    vacants,
}) => {

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Navn', width: 180},
        { field: 'stilling', headerName: 'Stilling', width: 120 },
        { field: 'capacity', headerName: 'Kapasitet', type: 'number', width: 100 },
        { field: 'freeTill', headerName: 'Ledig til', width: 180 },
        { field: 'rowKey', headerName: 'Email', width: 240 },
        { field: 'timestamp', headerName: 'Sist oppdatert', width: 240 },
    ];

    const rows = vacants;
    
    return (
        <div style={{ height: 800, width: '100%' }}>
            <DataGrid
                className='vacant-table'
                rows={rows}
                columns={columns}
                getRowId={(row) => row.rowKey}
                // pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                components={{Toolbar: CustomToolbar,
                }}
                sx={{
                    border: 'none',
                    borderRadius: '0',
                }}
                 initialState={{
                    sorting: {
                    sortModel: [{ field: 'capacity', sort: 'desc' }],
                    },
                }}

            />
        </div>
        
    )
}

function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarExport printOptions={{ disableToolbarButton: true }}/>
        </GridToolbarContainer>
    );
}
    
  





export default VacantTable;
