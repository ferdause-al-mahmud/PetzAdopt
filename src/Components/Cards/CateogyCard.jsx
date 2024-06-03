/* eslint-disable react/prop-types */

const CateogyCard = ({ url, category }) => {
    return (
        <>
            {/*<!-- Component: Image overlay card --> */}
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                {/*  <!-- Image --> */}
                <figure className="relative">
                    <img
                        src={url}
                        alt="card image"
                        className="h-[300px] w-full"
                    />
                    <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 p-6 text-white">
                        <h3 className="text-2xl font-serif font-medium text-center">{category}</h3>
                    </figcaption>
                </figure>
            </div>
            {/*<!-- End Image overlay card --> */}
        </>

    );
};

export default CateogyCard;