
const LatestNews = () => {
    return (
        <section className="max-w-7xl mx-auto py-6 sm:py-12  text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h1 className="text-2xl sm:text-5xl font-bold text-center">Latest News</h1>
                    <p className="text-lg mt-8 sm:w-[70%] mx-auto text-center sm:mb-12">Thinking about adopting a pet for the first time? We{"'"}ve got you covered with expert advice and practical tips to make your journey smooth and enjoyable. Learn about pet-proofing your home.</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                    <article className="flex flex-col bg-gray-50">
                        <div>
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
                        </div>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-indigo-600">Convenire</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                <span>June 1, 2020</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col bg-gray-50">
                        <div>
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?2" />
                        </div>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-indigo-600">Convenire</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                <span>June 2, 2020</span>
                                <span>2.2K views</span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col bg-gray-50">
                        <div>
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
                        </div>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-indigo-600">Convenire</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                <span>June 3, 2020</span>
                                <span>2.3K views</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default LatestNews;