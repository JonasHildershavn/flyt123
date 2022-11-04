import { NextPage } from 'next'
import PageLayout from '../components/page-layout/page-layout';
import VacantTable from '../components/vacant-table/vacant-table';

import { AzureVacant } from '../models/azure-vacant';
import { Storage } from '../api/azure-storage';
import Head from 'next/head';
import Footer from '../components/footer/footer';
import Admin from '../components/admin/admin';

interface AdminPageProps {
    vacants: AzureVacant[]
}


const AdminPage : NextPage<AdminPageProps> = ({
    vacants,
}) => {
    return (
        <PageLayout title="Adminpanel">
            <Admin></Admin>
            <VacantTable array={vacants} />
        </PageLayout>
    )
}

AdminPage.getInitialProps = async () => {
    const resp = await fetch('http://localhost:3000/api/vacants');
    const json = await resp.json();
    return {vacants: json}
}

export default AdminPage

