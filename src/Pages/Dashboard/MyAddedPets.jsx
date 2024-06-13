import PetTable from "../../Components/Tables/PetTable";

const MyAddedPets = () => {
    return (
        <div className="my-8 sm:mt-12">
            <h1 className="text-3xl md:text-5xl text-center font-bold">My added pets</h1>
            <PetTable></PetTable>
        </div>
    );
};

export default MyAddedPets;