import { NextPage } from 'next'
import PageLayout from '../components/page-layout/page-layout';
import VacantTable from '../components/vacant-table/vacant-table';

import { AzureVacant } from '../models/azure-vacant';

interface AdminPageProps {
    vacants: AzureVacant[]
}


const AdminPage : NextPage<AdminPageProps> = ({
    vacants,
}) => {
    return (
        <PageLayout title="Adminpanel">
            <h2>Admin</h2>
            <VacantTable vacants={vacants}/>
        </PageLayout>
    )
}

AdminPage.getInitialProps = async () => {
    const resp = await fetch('http://localhost:3000/api/vacants');
    const json = await resp.json();
    return {vacants: json}
}

export default AdminPage

