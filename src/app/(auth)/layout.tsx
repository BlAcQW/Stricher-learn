// import { onAuthenticatedUser } from "@/actions/auth"
// import BackdropGradient from "@/components/global/backdrop-gradient"
// import GlassCard from "@/components/global/glass-card"
// import { redirect } from "next/navigation"

// type Props = {
//     children: React.ReactNode
// }

// const AuthLayout = async ({ children }: Props) => {
//     const user = await onAuthenticatedUser()

//     if (user.status === 200) redirect("/callback/sign-in")

//     return (
//         <div className="container h-screen flex justify-center items-center">
//             <div className="flex flex-col w-full items-center py-24">
//                 <h2 className="text-4xl font-bold text-themeTextWhite">
//                     Stricher
//                 </h2>
//                 <BackdropGradient
// className="w-4/12 h-2/6 opacity-40"
// container="flex flex-col items-center"
//                 >
//                     <GlassCard className="xs:w-full md:w-7/12 lg:w-5/12 xl:w-4/12 p-7 mt-16">
//                         {children}
//                     </GlassCard>
//                 </BackdropGradient>
//             </div>
//         </div>
//     )
// }

// export default AuthLayout

import { onAuthenticatedUser } from "@/actions/auth"
import { unstable_noStore as noStore } from "next/cache"
import dynamic from "next/dynamic"
import { redirect } from "next/navigation"

const BackdropGradient = dynamic(
    () => import("@/components/global/backdrop-gradient"),
    {
        ssr: false,
        loading: () => <div className="bg-themeBackground" />,
    },
)

const GlassCard = dynamic(() => import("@/components/global/glass-card"), {
    ssr: false,
})

type Props = {
    children: React.ReactNode
}

const AuthLayout = async ({ children }: Props) => {
    noStore()
    const user = await onAuthenticatedUser()

    if (user.status === 200) redirect("/callback/sign-in")

    return (
        <div className="container h-[100dvh] flex justify-center items-center p-4">
            <div className="w-full max-w-md">
                <h2 className="text-3xl md:text-4xl font-bold text-themeTextWhite text-center mb-8">
                    Stricher
                </h2>
                <div className="relative">
                    <BackdropGradient className="absolute inset-0 opacity-40 -z-10">
                        <GlassCard className="backdrop-blur-md p-6 w-full">
                            {children}
                        </GlassCard>
                    </BackdropGradient>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
