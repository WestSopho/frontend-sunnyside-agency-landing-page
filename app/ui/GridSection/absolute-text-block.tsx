
interface AbsoluteTextBlockProps{
    title: string, 
    description: string,
}

export default function AbsoluteTextBlock({title, description}:AbsoluteTextBlockProps){
    return (
        <div className="absolute size-full top-0 flex flex-col justify-start">
            <div className="h-1/2"></div>
            <div className="h-1/2 flex justify-center items-center">
                <div className="text-center max-w-[340px] space-y-7 sm:space-y-1 md:space-y-7">
                    <p className="font-fraunces font-black text-3xl">{title}</p>
                    <p className="font-barlow font-semibold text-base">{description}</p>
                </div>
            </div>
        </div>
    );
}