import { social_icons_path } from '@/app/lib/paths';

export default function SocialMediaIcons(){
    return(
        <div className="grid grid-rows-1 grid-cols-4 gap-3">
            {social_icons_path.map((path, index) => (
                <div key={index} className="flex justify-center w-[30px]">
                    <svg className='fill-[#2C7566] size-[22px] hover:cursor-pointer hover:fill-white' xmlns="http://www.w3.org/2000/svg"><path d={path}/></svg>
                </div>
                ))}
        </div>
    );

}