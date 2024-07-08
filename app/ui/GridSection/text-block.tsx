interface TextBlockProps{
    title: string,
    description: string,
    underlineColor: string
}

export default function TextBlock({title, description, underlineColor}: TextBlockProps){
    return (
        <div className="flex justify-center items-center p-10 sm:p-14">
            <div className="flex flex-col gap-7 max-w-[445px] text-center sm:text-start">
                <p className="font-fraunces font-black text-[#24303E] text-[32px] sm:text[40px]">{title}</p>
                <p className="font-barlow font-semibold text-[#808397]">{description}</p>
                <button className={`font-fraunces font-black text-[15px] text-[#24303E] ${underlineColor} decoration-4 uppercase hover:underline text-center sm:text-start`}>Learn More</button>
            </div>
        </div>
    );
}