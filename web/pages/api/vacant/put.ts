import type { NextApiRequest, NextApiResponse } from 'next'
import { AzureVacant } from '../../../models/azure-vacant'
import { AzureClient } from '../azure-client'
import { AzureStorage } from '../azure-storage'

export default async function getVacantById(req: NextApiRequest, res: NextApiResponse<AzureVacant>) {
    // const storage = new AzureStorage()
    const client = new AzureClient;

    switch (req.method) {
        case 'PUT': {
            // const vacant = {
            //     partitionKey: "",
            //     rowKey: "kortnavn@mail.no",
            //     name: "kort navn",
            //     stilling: "Utvikler",
            //     capacity: 0,
            //     freeTill: "2023-01-01",
            //     etag: ""
            // }
            const vacant = JSON.parse(req.body);
            console.log("vacant in put.ts=", vacant)
            client.upsertEntity(vacant)

        }
    }
}