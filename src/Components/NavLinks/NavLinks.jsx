import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        <ul className="flex gap-4">
            <NavLink to="/" className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white"}><li>Home</li></NavLink>
            <NavLink to="/applied-Jobs" className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white"}><li> Applied Jobs</li></NavLink>
            <NavLink to="/blog" className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white"}><li>Blog</li></NavLink>
        </ul>
    );
};

export default NavLinks;