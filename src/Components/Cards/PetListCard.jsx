/* eslint-disable react/prop-types */

import { GiPawHeart } from "react-icons/gi";
import { TbVaccine } from "react-icons/tb";

const PetListCard = ({ pet }) => {
    return (
        <div className="flex flex-col gap-4 bg-base-100 border rounded-lg shadow-lg p-4">
            <div className="card flex-col md:flex-row card-side  ">
                <figure className="md:w-[50%] "><img src={pet.petImage} className="rounded-md" alt="Movie" /></figure>
                <div className="card-body md:w-[50%]">
                    <h2 className="card-title border-b border-dashed">{pet.petName}</h2>
                    <p className="border-b border-dashed">{pet.petAge}</p>
                    <p className="border-b border-dashed">{pet.petLocation}</p>

                </div>
            </div>
            <div className="">
                <div className="flex rounded-md font-medium mb-4 bg-slate-200 p-4 gap-6 justify-center items-center">
                    <div className="flex flex-col items-center"> <TbVaccine className="text-2xl text-[#ff946b] " /> <p>Vaccined</p></div>
                    <div className="flex flex-col items-center"> <GiPawHeart className="text-2xl text-[#ff946b] " /><p>Child friendly</p></div>
                </div>
                <div>
                    <button className="btn w-full bg-[#ff946b]">Adopt</button>

                </div>
            </div>
        </div>
    );
};

export default PetListCard;