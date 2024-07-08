
interface NavLinkMenuProps {
    text:string;
}

export default function NavLinkMenu({text}: NavLinkMenuProps){
    return (
        <a href="#" className="font-barlow font-semibold text-[20px] text-[#808397]">{text}</a>
    );
}
