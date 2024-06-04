/* eslint-disable react/prop-types */

const AdoptModal = ({ setShowModal }) => {
    return (
        <div onClick={() => setShowModal(false)} className="bg-black z-1 bg-opacity-30 fixed top-0 w-full  h-[100vh] flex items-center justify-center">
            <div className="card  bg-white shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="flex justify-around">
                        <button onClick={() => setShowModal(false)} className="btn w-1/2 bg-[#ff946b]">Close</button>
                        <button onClick={() => setShowModal(false)} className="btn w-1/2 bg-green-600">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdoptModal;