import Image from 'next/image';

interface HamburguerProps {
    divRef: React.RefObject<HTMLHeadElement>;
}

export default function Hamburguer({divRef}: HamburguerProps){
    function handleClick(){
        if (divRef.current !== null){
            divRef.current.classList.toggle('hidden');
        }
    }

    return (
        <div className='relative sm:hidden'>
            <Image 
                src="/icon-hamburger.svg"
                alt="Hamburguer"
                width={20}
                height={20}
                className='hover:cursor-pointer'
                onClick={() => {
                    handleClick();
                }}
            />
        </div>
    );
}