import NavLink from "@/app/ui/HeroSection/nav-link";
import Button from "@/app/ui/HeroSection/button";

export default function Nav(){
    return (    
        <nav className="hidden sm:grid sm:grid-rows-1 sm:grid-cols-4 sm:place-items-center">
            <NavLink text="About" />
            <NavLink text="Services" />
            <NavLink text="Projects" />
            <Button text="Contact" />
        </nav>
    );
}