interface ButtonProps {
    text: string;
}

export default function Button({text}: ButtonProps){
    return (
        <button className="bg-[#FBD600] px-5 py-3 font-fraunces font-bold text-[#24303E] text-[15px] text-center rounded-full uppercase hover:sm:bg-opacity-25 hover:sm:text-white md:px-7 sm:bg-white">{text}</button>
    );
}