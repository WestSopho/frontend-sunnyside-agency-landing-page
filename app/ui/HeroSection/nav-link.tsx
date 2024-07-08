
interface NavLinkProps {
    text:string;
}

export default function NavLink({text}: NavLinkProps){
    return (
        <a href="#" className="font-barlow font-semibold text-white">{text}</a>
    );
}
