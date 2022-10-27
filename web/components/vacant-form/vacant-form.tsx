import { AzureVacant } from "../../models/azure-vacant";

import { useState } from "react";
import { useForm } from "react-hook-form";

const VacantForm: React.FC = ({

}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(e: any) {
        const data: AzureVacant = {
            partitionKey: "",
            rowKey: e.rowKey,
            name: e.name,
            stilling: e.stilling,
            capacity: e.capacity,
            freeTill: e.freeTill,
            etag: ""
        }
        // console.log("submitting:",data)
        
        const postData = async () => {
            const response = await fetch("/api/vacant/put", {
                method: "PUT",
                body: JSON.stringify(data),
            });
            return response.json();
            };
            
        postData().then((data) => {
        console.log(data.message);
        });
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Navn <input {...register("name")} />
            </label>
            <label>
                Mail <input {...register("rowKey", { required: true })}/>
            </label>
            <label>
                Stilling <input {...register("stilling")} />
            </label>
            <label>
                Capacity <input {...register("capacity")} />
            </label>
            <label>
                FreeTill <input {...register("freeTill")} />
            </label>
            <input type="submit"/>
        </form>
        
    )
}


export default VacantForm;
