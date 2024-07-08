
interface TwoGrid{
    children: Readonly<React.ReactNode>,
}

export default function TwoGrid({children}: TwoGrid){
    return (
        <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1">
            {children}
        </div>
    );
}