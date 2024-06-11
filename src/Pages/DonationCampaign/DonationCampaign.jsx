import { useQuery } from "@tanstack/react-query";
import DonationCard from "../../Components/Cards/DonationCard";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import CampaignSkeleton from "../../Components/Skeleton/CampaignSkeleton";

const DonationCampaign = () => {
    const axiosCommon = useAxiosCommon()
    const { data: campaigns = [], isLoading } = useQuery({
        queryKey: ['donation-campaign'],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/campaigns`)
            return data
        },
    })
    return (
        <div className="my-12 max-w-7xl mx-auto">
            <h1 className="text-2xl mb-6 sm:text-5xl font-bold text-center">Our Campaigns</h1>
            <div className="grid  gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {isLoading ? (
                    Array(6).fill().map((_, index) => (
                        <CampaignSkeleton key={index} />
                    ))
                ) : (
                    campaigns.map((campaign, index) => (
                        <DonationCard key={index} campaign={campaign} />
                    ))
                )}
            </div>
        </div>
    );
};

export default DonationCampaign;