import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";

const Header = () => {
    return (
        <div>
            <div className="flex justify-between items-center mt-[50px] mb-[50px] max-w-[1320px] m-auto">
                <Link to="/"><p className="font-extrabold text-[32px]">CareerHub</p></Link>
                <NavLinks></NavLinks>
                <button className="py-[20px] px-[28px] bg-violet-800 rounded-[8px]">Start Applying</button>
            </div>
        </div>
    );
};

export default Header;