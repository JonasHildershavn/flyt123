import { NextPage } from 'next'
import PageLayout from '../components/page-layout/page-layout';
import VacantTable from '../components//vacant-table/vacant-table';
import { Storage } from "../../api/azure-storage"

// import AzureTables from "@azure/data-tables";
import { TableClient, AzureNamedKeyCredential } from "@azure/data-tables";
import { AzureVacant } from '../models/azure-vacant';

interface Props {
    vacants: AzureVacant[]
}


const AdminPage : NextPage<Props> = ({
    vacants,
}) => {
    return (
        <PageLayout title="Adminpanel">
            <p>Admin</p>
            <VacantTable array={vacants}/>
        </PageLayout>
    )
}

export async function getStaticProps() {

    const account = "flytstorageaccount";
    const accountKey = "RGGRqAcHULge99e0yqjA4d1NWXYUoR9HlIpLNJMKZm1QKXPyZDYQmSGpecBlA0UVgtV2Zr1Wk07A+ASt6bl91w==";
    const tableName = "vacants";

    const credential = new AzureNamedKeyCredential(account, accountKey);
    const client = new TableClient(`https://${account}.table.core.windows.net`, tableName, credential);

    const vacantsIter = client.listEntities()

    let vacants = [];
    for await (const vacant of vacantsIter) {
        const parsed: AzureVacant = vacant
        
        vacants.push(parsed)
    }
    
    return {
        props: {
            vacants,
        }
    }
}

export default AdminPage
