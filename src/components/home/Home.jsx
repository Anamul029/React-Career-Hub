import FeaturedJob from "../FeaturedJob/FeaturedJob";
import Banner from "../banner/Banner";
import CetagoryList from "../catagoryList/CetagoryList";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CetagoryList></CetagoryList>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;