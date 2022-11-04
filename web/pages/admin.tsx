import { NextPage } from 'next'
import PageLayout from '../components/page-layout/page-layout';
import VacantTable from '../components//vacant-table/vacant-table';

import { AzureVacant } from '../models/azure-vacant';
import { Storage } from '../api/azure-storage';
import Head from 'next/head';
import Footer from '../components/footer/footer';
import Admin from '../components/admin/admin';

interface Props {
    vacants: AzureVacant[]
}


const AdminPage : NextPage<Props> = ({
    vacants,
}) => {
    
    return (
        <PageLayout title="Adminpanel">
            <Admin></Admin>
            <VacantTable array={vacants} />
        </PageLayout>
    )
}

export async function getStaticProps() {
    let storage = new Storage();
    let vacants = await storage.getVacants();

    return {
        props: {
            vacants,
        }
    }
}

export default AdminPage

