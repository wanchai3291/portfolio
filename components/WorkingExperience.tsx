import ExCard from "./ExCard"

type Props = {}

export default function WorkingExperience({}: Props){
    return(
        <div className="h-screen flex relative overflow-hidden flex-row text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500">
            Experience
            </h3>
            <ExCard/>
            <ExCard/>
            <ExCard/>
            <ExCard/>
        </div>
    )
}