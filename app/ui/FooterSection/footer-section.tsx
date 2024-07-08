import FooterLink from "@/app/ui/FooterSection/footer-link";
import SocialMediaIcons from "@/app/ui/FooterSection/social-media-icons";
import {logo_path} from "@/app/lib/paths";

export default function FooterSection(){
    return(
        <div className='py-16 px-5 sm:p-16 bg-[#90D4C6] flex justify-center items-center'>
            <div className="flex flex-col justify-around items-center gap-7">
                {/* Footer Logo and Links Wrapper */}
                <div className="space-y-7">

                    {/* Logo */}
                    <div className="flex justify-center">
                        <svg className='fill-[#2C7566]' width="170" height="33" viewBox="0 0 123 34" preserveAspectRatio="xMidYMin" xmlns="http://www.w3.org/2000/svg"><path d={logo_path} fillRule="nonzero"/></svg>
                    </div>

                    {/* Links */}
                    <div className='grid grid-cols-3 grid-rows-1 justify-center'>
                        <FooterLink text='About'/>
                        <FooterLink text='Services'/>
                        <FooterLink text='Projects'/>
                    </div>
                </div>

                {/* Social Media Icons */}
                <SocialMediaIcons />
            </div>
        </div>
    );
}