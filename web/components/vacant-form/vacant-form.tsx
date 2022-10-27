import { AzureVacant } from "../../models/azure-vacant";
import { useForm } from "react-hook-form";

const VacantForm: React.FC = ({
}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    function onSubmit(data: any) {
        data["partitionKey"] = "";  // adding unused partitionKey field
        const postData = async () => {
            const response = await fetch("/api/vacant/put", {
                method: "PUT",
                body: JSON.stringify(data),
            });
            return response.json();
            };

        postData().then((data) => {
        console.log('result:', data);
        });
    }


    return (
        <form className="vacant-form" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="email" {...register("rowKey")} />
            <input type="text" placeholder="name" {...register("name")} />
            <input type="text" placeholder="role" {...register("role")} />
            <input type="text" placeholder="prefAcitvity" {...register("prefActivity")} />
            <input type="text" placeholder="prefProject" {...register("prefProject")} />
            <input type="text" placeholder="motivation" {...register("motivation")} />

            {/* Number slider from MUI? 
            https://mui.com/material-ui/react-slider/ */}
            <input type="number" placeholder="capacity" {...register("capacity", {min: 0, max: 100})} />
            
            {/* Date picker from MUI?
            https://mui.com/x/react-date-pickers/date-picker/ */}
            <input type="datetime" placeholder="availableTill" {...register("availableTill", {})} />
            <input type="submit" />
        </form>
        
    )
}


export default VacantForm;
