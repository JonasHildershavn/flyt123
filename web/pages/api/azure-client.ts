import { TableClient, AzureNamedKeyCredential} from "@azure/data-tables";

export class AzureClient extends TableClient {
    constructor() {
        const account = "flytstorageaccount";
        const url = `https://${account}.table.core.windows.net`
        const accountKey = process.env.Azure_StorageAccount_AccessKey as string
        const tableName = "vacants";
        const credential = new AzureNamedKeyCredential(account, accountKey);
        super(url, tableName, credential);
    }
}
