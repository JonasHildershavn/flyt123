import { NextPage } from 'next'
import PageLayout from '../../components/page-layout/page-layout'
import { Storage } from '../../api/azure-storage'
import { AzureVacant } from '../../models/azure-vacant';

interface Props {
}

const LedigTidForm: NextPage<Props> = ({
    
}) => {
    // addVacant()
    return (
        <PageLayout title="Ledig tid">
            <form >
                <label>
                <input placeholder='Name' type="text" name="name" />
                </label>
                <input type="submit" value="Submit"/>
            </form>
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

// async function addVacant(){
//     let storage = new Storage();
//     let vacants = await storage.getVacants();
//     console.log("STORAGE: ", vacants)
// }


export default LedigTidForm
