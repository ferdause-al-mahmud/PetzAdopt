import { FaFilter } from "react-icons/fa";
import PetListCard from "../../Components/Cards/PetListCard";
import { useEffect, useState } from "react";

const PetListing = () => {
    const [pets, setPets] = useState([])
    useEffect(() => {
        fetch('/pets.json')
            .then(res => res.json())
            .then(data => setPets(data))
    }, [])
    return (
        <div className="my-12 max-w-7xl mx-auto">
            <h1 className="text-2xl mb-6 sm:text-5xl font-bold text-center">List of pets</h1>
            <div className="flex gap-4 sm:justify-around items-center px-2">
                <div className="flex items-center gap-2 sm:gap-6">

                    <label className="sm:text-2xl mb-2 font-bold"><FaFilter /></label>
                    <select
                        id="difficulty"
                        // value={filter}
                        // onChange={handleFilterChange}
                        className="p-4 bg-[#ff946b] rounded-md text-base sm:text-lg md:text-xl lg:text-2xl"
                    >
                        <option value="">All</option>
                        <option value="easy">Cats</option>
                        <option value="medium">Dogs</option>
                        <option value="hard">Parrots</option>
                        <option value="hard">Rabbit</option>
                        <option value="hard">Fish</option>
                        <option value="hard">Hamster</option>
                    </select>

                </div>
                <div>
                    <label className="input border-[#ff946b] border flex items-center gap-2">
                        <input type="text" className=" w-[100px] sm:w-auto grow " placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pets.map(pet => <PetListCard key={pet.petId} pet={pet}></PetListCard>)}

            </div>
        </div>
    );
};

export default PetListing;