import { 
    DataGrid, 
    GridColDef, 
    GridRenderCellParams, 
    GridToolbarContainer, 
    GridToolbarExport,
    nbNO
} from '@mui/x-data-grid';
import { AzureVacant } from '../../models/azure-vacant';


interface VacantTableProps {
    vacants: AzureVacant[];
}

const VacantTable: React.FC<VacantTableProps> = ({
    vacants,
}) => {

    const columns: GridColDef[] = [
        { field: 'personalia', headerName: 'Navn', 
            renderCell: (e: GridRenderCellParams<string>) => (
            <div>
                {e.value && (e.value.split(",").map((x: string) => (
                    <li key={x}>{x}</li>
                )))}
            </div>
        ), flex: 1 },
        { field: 'prefProject', headerName: 'Prosjektinteresse', 
            renderCell: (e: GridRenderCellParams<string>) => (
            <div>
                {e.value && (e.value.split(",").map((x: string) => (
                    <li key={x}>{x}</li>
                )))}
            </div>
        ), flex: 1 },
        { field: 'prefCategory', headerName: 'Rolle(r)',
            renderCell: (e: GridRenderCellParams<string>) => (
            <div>
                {e.value && (e.value.split(",").map((x: string) => (
                    <li key={x}>{x}</li>
                )))}
            </div>
        ), flex: 1 },
        { field: 'capacity', headerName: 'Kapasitet', flex: 1 },
        { field: 'prefActivity', headerName: 'Vil gjøre',
            renderCell: (e: GridRenderCellParams<string>) => (
            <div>
                {e.value && (e.value.split(",").map((x: string) => (
                    <li key={x}>{x}</li>
                )))}
            </div>
        ), flex: 1 },
        { field: 'otherInfo', headerName: 'Tilleggsinfo', flex: 1 },
        { field: 'timestamp', headerName: 'Oppdatert',
            renderCell: (e: GridRenderCellParams<string>) => (
            <div>
                {e.value && Intl.DateTimeFormat('no').format(Date.parse(e.value))}
            </div>
        ), flex: 1 },
    ];

    let filteredVacants = vacants.filter(function(item) { 
        return item.showInAdmin == true;  
    });

    filteredVacants.forEach(v => {
        v['personalia'] = v.name + ',' + v.rowKey
    });
    console.log(filteredVacants[0])

    const rows = filteredVacants;
    
    return (
        <div className="vacant-table">
            <DataGrid
                className='vacant-table__grid'
                rows={rows}
                columns={columns}
                getRowId={(row) => row.rowKey}
                rowsPerPageOptions={[5]}
                getRowHeight={() => 'auto'}
                localeText={nbNO.components.MuiDataGrid.defaultProps.localeText}
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
