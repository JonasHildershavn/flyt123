import { TableEntityResult } from "@azure/data-tables";

export interface AzureVacant extends TableEntityResult<Record<string, unknown>> {
    partitionKey: string;       // empty
    rowKey: string;             // rowKey (email as unique id). Handled by AD
    name: string;               // for and surname, freetext. Handled by AD
    role: string;               // E.G. Utvikler, Designer, Salg osv.   
    prefActivity: string; // 
    prefProject: string;  //
    motivation: string;         //
    capacity: number;           // 0-100
    availableTill: string;      // ISO-format: YYYY-MM-DD
    // timestamp: string;       // field auto handled by Azure
}
