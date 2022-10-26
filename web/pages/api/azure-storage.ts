import { TableClient, AzureNamedKeyCredential, TableEntity } from "@azure/data-tables";
import { AzureVacant } from '../../models/azure-vacant';
import type { NextApiRequest, NextApiResponse } from 'next'

export class AzureStorage {
    private account: string = "flytstorageaccount";
    private accountKey: string;

    private tableName: string = "vacants";
    private credential: AzureNamedKeyCredential;
    private client: TableClient;

    constructor() {
        this.accountKey = process.env.Azure_StorageAccount_AccessKey as string
        if(!this.accountKey || this.accountKey === ""){
            throw new ReferenceError ("Could not retrieve Azure_StorageAccount_AccessKey");

        }
        this.credential = new AzureNamedKeyCredential(this.account, this.accountKey);
        this.client = new TableClient(`https://${this.account}.table.core.windows.net`, this.tableName, this.credential);   
    }

    async getVacants(): Promise<AzureVacant[]> {
        const vacantsIter = this.client.listEntities()
        let vacants: AzureVacant[] = []
        for await (const vacant of vacantsIter) {
            vacants.push(vacant as AzureVacant)
        }
        return vacants
    }

    async getVacantByMail(mail: string) {
        return await this.client.getEntity("", mail)
    }

    async upsertVacant(vacant: AzureVacant) {
        await this.client.upsertEntity(vacant, "Merge")
        return "success";
    }
}

