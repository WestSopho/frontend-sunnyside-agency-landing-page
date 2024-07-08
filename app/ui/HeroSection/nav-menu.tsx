import NavLinkMenu from "@/app/ui/HeroSection/nav-link-menu";
import Button from "@/app/ui/HeroSection/button";

export default function NavMenu(){
    return (    
        <nav className="p-5 grid grid-rows-4 grid-cols-1 place-items-center gap-4">
            <NavLinkMenu text="About" />
            <NavLinkMenu text="Services" />
            <NavLinkMenu text="Projects" />
            <Button text="Contact" />
        </nav>
    );
}