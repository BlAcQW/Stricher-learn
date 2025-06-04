import { onSignInUser } from "@/actions/auth"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const CompleteSigIn = async () => {
    const user = await currentUser()
    if (!user) return redirect("/sign-in")

    const authenticated = await onSignInUser(user.id)

    if (authenticated.status === 200) return redirect(`/explore`)

    if (authenticated.status === 207)
        return redirect(
            `/group/${authenticated.groupId}/channel/${authenticated.channelId}`,
        )

    if (authenticated.status !== 200) {
        redirect("/sign-in")
    }
}

export default CompleteSigIn


// import { onSignInUser } from "@/actions/auth"
// import { currentUser } from "@clerk/nextjs/server"
// import { redirect } from "next/navigation"

// const CompleteSigIn = async () => { // Fixed typo in name
//     try {
//         const user = await currentUser()
//         if (!user) return redirect("/sign-in")

//         const authenticated = await onSignInUser(user.id)

//         // Handle specific status codes
//         if (authenticated.status === 200) {
//             return redirect(`/explore`)
//         } else if (authenticated.status === 207) {
//             return redirect(
//                 `/group/${authenticated.groupId}/channel/${authenticated.channelId}`
//             )
//         } else {
//             return redirect("/sign-in")
//         }
//     } catch (error) {
//         console.error("Sign-in completion error:", error)
//         return redirect("/sign-in?error=unknown")
//     }
// }

// export default CompleteSigIn // Fixed export name