import { FaFilter } from "react-icons/fa";
import PetListCard from "../../Components/Cards/PetListCard";
import { useQuery } from '@tanstack/react-query'
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useState } from "react";
import AdoptModal from "../../Components/Modals/AdoptModal";
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from "../../Components/Skeleton/CardSkeleton";
const PetListing = () => {
    const axiosCommon = useAxiosCommon();
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');
    const [detailPet, setDetailPet] = useState('');
    const [showModal, setShowModal] = useState(false);



    console.log(detailPet)

    const { data: pets = [], isLoading } = useQuery({
        queryKey: ['pets', filter, search],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/pets?category=${filter}&name=${search}`)

            return data
        },
    })
    const handleFilterChange = (event) => {
        const selectedFilter = event.target.value;
        console.log('Selected filter:', selectedFilter);
        setFilter(selectedFilter);
    };
    return (
        <div className="relative">
            <div className="my-12 max-w-7xl mx-auto">
                <h1 className="text-2xl mb-6 sm:text-5xl font-bold text-center">List of pets</h1>
                <div className="flex gap-4 sm:justify-around items-center px-2">
                    <div className="flex items-center gap-2 sm:gap-6">

                        <label className="sm:text-2xl mb-2 font-bold"><FaFilter /></label>
                        <select
                            id="category"
                            value={filter}
                            onChange={handleFilterChange}
                            className="p-4 bg-[#ff946b] rounded-md text-base sm:text-lg md:text-xl lg:text-2xl"
                        >
                            <option value="">All</option>
                            <option value="cat">Cat</option>
                            <option value="dog">Dog</option>
                            <option value="parrot">Parrot</option>
                            <option value="rabbit">Rabbit</option>
                            <option value="fish">Fish</option>
                            <option value="hamster">Hamster</option>
                        </select>

                    </div>
                    <div>
                        <label className="input border-[#ff946b] border flex items-center gap-2">
                            <input
                                type="text"
                                className=" w-[100px] sm:w-auto grow "
                                placeholder="Search"
                                onChange={e => setSearch(e.target.value)}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                    </div>
                </div>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {isLoading ? <>
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />

                    </> : pets.map(pet => <PetListCard setDetailPet={setDetailPet} setShowModal={setShowModal} key={pet.petId} pet={pet}></PetListCard>)}

                </div>


            </div>
            {showModal && <>
                <AdoptModal setShowModal={setShowModal}></AdoptModal>
            </>}
        </div>

    );
};

export default PetListing;