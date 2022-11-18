import { TableEntityResult } from "@azure/data-tables";

export interface AzureVacant extends TableEntityResult<Record<string, unknown>> {
    partitionKey: string;       // empty
    rowKey: string;             // rowKey (email as unique id). Handled by AD
    name: string;               // for and surname, freetext. Handled by AD
    role: string;               // E.G. Utvikler, Designer, Salg osv.   
    prefActivity: string;       // freetext?
    prefProject: string;        // points at specific project, sales task or freetext
    motivation: string;         // freetext
    capacity: number;           // 0-100
    availableTill: string;      // ISO-format: YYYY-MM-DD
    showInAdmin: boolean;       // whether the user's details is available in the admin page
    // timestamp: string;       // field auto handled by Azure
}
