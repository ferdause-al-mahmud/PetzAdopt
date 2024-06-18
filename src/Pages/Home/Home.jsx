import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CallToAction from "./CallToAction";
import Category from "./Category";
import LatestNews from "./LatestNews";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <CallToAction></CallToAction>
            <LatestNews></LatestNews>
            <AboutUs></AboutUs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;