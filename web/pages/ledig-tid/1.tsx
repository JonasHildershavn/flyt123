import { NextPage } from 'next'
import PageLayout from '../../components/page-layout/page-layout'

import AzureTables from "@azure/data-tables";
import { TableClient, AzureNamedKeyCredential } from "@azure/data-tables";

const account = "flytstorageaccount";
const accountKey = "RGGRqAcHULge99e0yqjA4d1NWXYUoR9HlIpLNJMKZm1QKXPyZDYQmSGpecBlA0UVgtV2Zr1Wk07A+ASt6bl91w==";
const tableName = "test";

const credential = new AzureNamedKeyCredential(account, accountKey);
const client = new TableClient(`https://${account}.table.core.windows.net`, tableName, credential);

async function main() {
    let entitiesIter = client.listEntities();
    let i = 1;
    let x = ""
    for await (const entity of entitiesIter) {
        let str = `Entity${i}: PartitionKey: ${entity.partitionKey} RowKey: ${entity.rowKey}`
        console.log(str);
        x += str.toString()
        i++;
    }
    return x.toString()

}


const LedigTidForm: NextPage = () => {
    let x = main();
    return (
        <PageLayout title="Ledig tid">
            
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <h1>{x.toString()}</h1>
        </PageLayout>
    )
}

export default LedigTidForm
