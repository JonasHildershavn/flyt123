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
        { field: 'name', headerName: 'Navn', width: 120},
        { field: 'rowKey', headerName: 'Email', width: 180 },
        { field: 'role', headerName: 'Stilling', width: 120 },
        { field: 'prefActivity', headerName: 'Vil gjøre', width: 120 },
        { field: 'prefProject', headerName: 'Prosjektinteresse', width: 120 },
        { field: 'motivation', headerName: 'Motivasjon', width: 120 },
        { field: 'capacity', headerName: 'Kapasitet', type: 'number', width: 100 },
        { field: 'availableTill', headerName: 'Ledig til', width: 120 },
        { field: 'timestamp', headerName: 'Oppdatert', width: 120 },
    ];

    let filteredVacants = vacants.filter(function(item) { 
        return item.showInAdmin == true;  
    });

    const rows = filteredVacants;
    
    return (
        <div className="vacant-table">
            <DataGrid
                className='vacant-table__grid'
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
