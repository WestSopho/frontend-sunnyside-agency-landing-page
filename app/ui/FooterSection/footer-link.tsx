interface FooterLink{
    text: string;
}

export default function FooterLink({text}: FooterLink){
    return(
        <div className="px-2 sm:px-5 flex justify-center">
            <a className="font-barlow font-semibold text-[#458D7E] text-center hover:text-white hover:cursor-pointer">{text}</a>
        </div>
        
    );
}