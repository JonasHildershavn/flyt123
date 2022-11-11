import { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Container from '../../components/container/container';
import Heading from '../../components/heading/heading';
import PageLayout from '../../components/page-layout/page-layout'
import VacantForm from '../../components/vacant-form/vacant-form';
import { AzureVacant } from '../../models/azure-vacant';

const LedigTidForm: NextPage = () => {
    useEffect(() => {
        getVacants()
    }, [])

    const getVacants = async () =>  {
        const vacantMail = "navn@email.com"
        const resp = await fetch('/api/vacant/' + vacantMail)
        const json = await resp.json()
        setExistingVacant(json)
    }

    const [existingVacant, setExistingVacant] = useState<AzureVacant>()
    return (
        <PageLayout title="Ledig tid">
            <Container className="" theme="wide">
                <Heading level={1}>
                    Mine interesser
                </Heading>
                { existingVacant && existingVacant !== undefined ? 
                    <VacantForm existingVacant={existingVacant}/>
                    : 
                    <div>Laster brukerdata...</div>
                }
            </Container>
        </PageLayout>
    )
}

export default LedigTidForm
