// import Image from "next/image"

// type Props = {}

// const DashboardSnippet = (props: Props) => {
//     return (
//         <div className="relative py-20">
//             <div className="w-full h-3/6 absolute rounded-[50%] radial--blur opacity-40 mx-10" />
//             <div className="w-full aspect-video relative">
//                 <div className="relative w-full h-full">
//                 <Image
//                     priority
//                     src="/globe.jpg"
//                     className="opacity-[0.95]"
//                     alt="snippet"
//                     sizes="100vw"
//                     fill
//                     objectFit="object-cover object-contain opacity-50"
//                 />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default DashboardSnippet

import Earth from "@/components/global/globe/globe"

type Props = {}

const DashboardSnippet = (props: Props) => {
    return (
        <div className="relative py-20">
            <div className="w-full h-3/6 absolute rounded-[50%] radial--blur opacity-40 mx-10" />
            <div className="w-full aspect-video relative">
                <Earth />
            </div>
        </div>
    )
}

export default DashboardSnippet
