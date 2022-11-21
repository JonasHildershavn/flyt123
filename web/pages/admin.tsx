import { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Container from '../components/container/container';
import Heading from '../components/heading/heading';
import PageLayout from '../components/page-layout/page-layout';
import VacantTable from '../components/vacant-table/vacant-table';
import { AzureVacant } from '../models/azure-vacant';

const AdminPage : NextPage = () => {
    useEffect(() => {
        getVacants()
    }, [])

    const getVacants = async () =>  {
        const resp = await fetch('/api/vacants/')
        const json = await resp.json()
        setVacants(json)
    }

    const [vacants, setVacants] = useState<AzureVacant[]>([])

    return (
        <PageLayout title="Adminpanel">
            <Container className="" theme="wide">
                <Heading level={1}>
                    Admin
                </Heading>
                <VacantTable vacants={vacants}/>
            </Container>
        </PageLayout>
    )
}


export default AdminPage

