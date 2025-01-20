import FeaturedJobs from "./Featured Jobs/FeaturedJobs";
import HeroSection from "./Hero Section/HeroSection";
import JobCatList from "./Job Catagory List/JobCatList"

const Home = () => {
    return (
        <div>
            <div className="flex flex-col max-w-[1320px] m-auto">
                <HeroSection></HeroSection>
                <JobCatList></JobCatList>
                <FeaturedJobs></FeaturedJobs>
            </div>
        </div>
    );
};

export default Home;