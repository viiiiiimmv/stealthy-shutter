import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import PillButton from "../components/PillButton";
const Home = () => {
    return (
        <div className="relative min-h-screen bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')", backgroundSize:"50%" }}
        >
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-4 min-h-screen">
            <Heading text="Stealthy Shutter" />
            <SubHeading text="Don’t just take pictures; capture the moments that matter." />
            <PillButton text="EXPLORE NOW" />
        </div>
        </div>
    );
};

export default Home;

