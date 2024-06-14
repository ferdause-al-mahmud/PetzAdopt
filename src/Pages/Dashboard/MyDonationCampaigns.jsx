import { useMutation } from "@tanstack/react-query";
import CampaignTable from "../../Components/Tables/CampaignTable";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const MyDonationCampaigns = () => {
    const axiosSecure = useAxiosSecure()
    //donor lists

    //update campaign
    const { mutateAsync } = useMutation({
        mutationFn: async campaign => {
            try {
                const { data } = await axiosSecure.patch(`/campaign/pause/${campaign._id}`);
                return data;
            } catch (error) {
                throw new Error("An error occurred");
            }
        },
        onSuccess: () => {
            console.log('Data Updated Successfully');
            toast.success('Data Updated Successfully!');
        },
        onError: (error) => {
            console.log(error.message);
        }
    });
    const handlePause = async (campaign) => {
        campaign.pause = !campaign.pause
        await mutateAsync(campaign);
    }
    return (
        <div className="my-8 sm:mt-12">
            <h1 className="text-3xl md:text-5xl text-center mb-8 font-bold">My donation campaigns</h1>
            <CampaignTable handlePause={handlePause}></CampaignTable>
        </div>
    );
};

export default MyDonationCampaigns;
