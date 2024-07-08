import Image from 'next/image';

interface TestimonialCardProps {
    src: string;
    name: string;
    pos: string;
    review: string;
}

export default function TestimonialCard({src, name, pos, review}: TestimonialCardProps){
    return(
        <div className="p-7 flex flex-col justify-between items-center text-center gap-10 sm:gap-12 max-w-[476px]">
            <div className='flex flex-col justify-between items-center gap-10'>
                <Image
                    src={src}
                    alt={name}
                    width={72}
                    height={72}
                    className='rounded-full'
                />
                <p className='font-barlow font-semibold text-[18px] text-[#5B636D]'>{review}</p>
            </div>
            
            <div>
                <p className='font-fraunces font-black text-[18px] text-[#24303E]'>{name}</p>
                <p className='font-barlow font-semibold text-[14px] text-[#A7AAAD]'>{pos}</p>
            </div>
        </div>
    );
}