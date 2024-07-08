'use client';

import Image from 'next/image';
import Nav from '@/app/ui/HeroSection/nav';
import Hamburguer from '@/app/ui/HeroSection/hamburguer';
import NavMenu from '@/app/ui/HeroSection/nav-menu';

import { useRef } from 'react';

export default function Header(){
    const menuRef = useRef<HTMLDivElement>(null);

    return (
        <header className="relative p-5 lg:px-10 lg:py-7">
            {/* Logo, Navbar and Hamburguer Icon */}
            <div className='flex justify-between items-center'>

                {/* Logo Image Wrapper*/}
                <div className='flex justify-start items-center'>
                    <Image 
                        src="/logo.svg"
                        alt="Sunnyside"
                        width={200}
                        height={50}
                    />
                </div>

                {/* Navbar Menu on Desktop devices */}
                <Nav />

                {/* Hamburguer Icon on Mobile Devices */}
                <Hamburguer divRef={menuRef}/>
            </div>

            {/* Hamburguer Menu */}
            <div className='hidden relative sm:hidden' ref={menuRef}>
                <div className='absolute w-full'>
                    <div className="flex justify-end">
                        <div className="w-12 overflow-hidden">
                            <div className=" h-16 bg-white rotate-45 transform origin-bottom-left"></div>
                        </div>
                    </div>
                    <div className='bg-white'>
                        <NavMenu />
                    </div>
                </div>
            </div>   
        </header>
    );
}