import type { NextApiRequest, NextApiResponse } from 'next'
import { AzureVacant } from '../../../models/azure-vacant'
import { AzureClient } from '../azure-client'
import { AzureStorage } from '../azure-storage'

export default async function getVacantById(req: NextApiRequest, res: NextApiResponse<AzureVacant>) {
    // const storage = new AzureStorage()
    const client = new AzureClient;

    switch (req.method) {
        case 'GET': {
            const rowKey = req.query.id as string
            const vacant = await client.getEntity("", rowKey) as AzureVacant
            res.json(vacant);
        }

        case 'PUT': {
            const vacant: AzureVacant = {
                partitionKey: "",
                rowKey: "testbruker@mail.no",
                name: "nyttnavn",
                stilling: "Utvikler",
                capacity: 0,
                freeTill: "2023-01-01",
                etag: ""
            }
            client.upsertEntity(vacant)

        }
    }
}