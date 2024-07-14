import Image from 'next/image';
import Header from '@/app/ui/HeroSection/header';

export default function HeroSection(){
    return (
        <div className='relative w-full'>

            {/* Backgound Image for Mobile Devices */}
            <Image 
            src="/mobile/image-header.jpg"
            alt="hero"
            width={750}
            height={1076}
            quality={100}
            className='w-full sm:hidden'
            />

            {/* Background Image for Desktop Devices */}
            <Image
            src="/desktop/image-header.jpg"
            alt="hero"
            width={2880}
            height={1600}
            quality={100}
            className='w-full hidden sm:block'
            />

            {/* Header (Top Bar) and Text */}
            <div className="absolute top-0 size-full flex flex-col">
                {/* Header */}
                <Header />

                {/* 'We are creatives' text and Arrow */}
                <div className='grow flex flex-col items-center justify-center -mt-20 sm:-mt-48 lg:-mt-64'>
                    {/* Text */}
                    <p className='py-10 font-fraunces font-black text-white text-4xl text-center uppercase tracking-widest sm:py-5 md:py-10 sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl'>
                        We are creatives
                    </p>
                    {/* Arrow SVG */}
                    <Image 
                        src="/icon-arrow-down.svg"
                        alt="arrow"
                        width={36}
                        height={114}
                        className='sm:h-[80px] md:h-[114px]'
                    />
                </div>
            </div>
        </div>
    );
}