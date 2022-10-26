import { NextPage } from 'next'

import { Storage } from '../api/azure-storage'
import { AzureVacant } from '../../models/azure-vacant';

import PageLayout from '../../components/page-layout/page-layout'
import VacantForm from '../../components/vacant-form/vacant-form';
import TestForm from '../../components/test-form/test-form';


interface Props {
}

const LedigTidForm: NextPage<Props> = ({
    
}) => {
    return (
        <PageLayout title="Ledig tid">
            <VacantForm/>
            
        </PageLayout>
    )
}


// TODO: Metode for å legge laste opp input til azure tablestorage


// export async function getStaticProps() {
//     let storage = new Storage();
    
//     const testVacant: AzureVacant = {
//         partitionKey: "",
//         rowKey: "testbruker@mail.no",
//         name: "testbruker",
//         stilling: "Utvikler",
//         capacity: 100,
//         freeTill: new Date("2023-01-01")
//     }
    
//     storage.upsertVacant(testVacant)

//     return {
//         props: {
//             // vacants,
//         }
//     }
// }
// export async function getStaticProps() {
    
//     let storage = new Storage();
//     let vacants = await storage.upsertVacant();

//     return {
//         props: {
//             vacants,
//         }
//     }
// }

export default LedigTidForm
