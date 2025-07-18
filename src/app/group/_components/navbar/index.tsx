// import GlassSheet from "@/components/global/glass-sheet"
// import Search from "@/components/global/search"
// import SideBar from "@/components/global/sidebar"
// import { UserWidget } from "@/components/global/user-widget"
// import { Button } from "@/components/ui/button"
// import { CheckBadge } from "@/icons"
// import { currentUser } from "@clerk/nextjs/server"
// import { Menu } from "lucide-react"
// import Link from "next/link"

// type NavbarProps = {
//   groupid: string
//   userid: string
// }

// export const Navbar = async ({ groupid, userid }: NavbarProps) => {
//   const user = await currentUser()
//   return (
//     <div className="bg-[#1A1A1D] py-2 px-3 md:px-7 md:py-5 flex gap-5 justify-between md:justify-end items-center">
//       <GlassSheet trigger={<Menu className="md:hidden cursor-pointer" />}>
//         <SideBar groupid={groupid} userid={userid} mobile />
//       </GlassSheet>
//       <Search
//         searchType="POSTS"
//         className="rounded-full border-themeGray bg-black !opacity-100 px-3"
//         placeholder="Search..."
//       />
//       <Link href={`/group/create`} className="hidden md:inline">
//         <Button
//           variant="outline"
//           className="bg-themeBlack rounded-2xl flex gap-2 border-themeGray hover:bg-themeGray"
//         >
//           <CheckBadge />
//           Create Group
//         </Button>
//       </Link>
//       <UserWidget userid={userid} image={user?.imageUrl!} groupid={groupid} />
//     </div>
//   )
// }

// "use client"

// import GlassSheet from "@/components/global/glass-sheet"
// import Search from "@/components/global/search"
// import SideBar from "@/components/global/sidebar"
// import { UserWidget } from "@/components/global/user-widget"
// import { Button } from "@/components/ui/button"
// import { CheckBadge } from "@/icons"
// import { useUser } from "@clerk/nextjs"
// import { Menu } from "lucide-react"
// import Link from "next/link"

// type NavbarProps = {
//     groupid: string
//     userid: string
// }

// export const Navbar = ({ groupid, userid }: NavbarProps) => {
//     const { user, isSignedIn } = useUser()

//     return (
//         <nav className="bg-[#1A1A1D] py-2 px-3 md:px-7 md:py-5 flex items-center justify-between gap-5">
//             {/* Mobile Sidebar */}
//             <div className="flex items-center gap-3 md:hidden">
//                 <GlassSheet
//                     trigger={
//                         <button aria-label="Open Menu" className="text-white">
//                             <Menu className="w-6 h-6" />
//                         </button>
//                     }
//                 >
//                     <SideBar groupid={groupid} userid={userid} mobile />
//                 </GlassSheet>
//             </div>

//             {/* Center Search (hidden on small screens) */}
//             {/* <div className="flex-1 flex justify-center">
//                 <Search
//                     searchType="POSTS"
//                     className="hidden md:block rounded-full border-themeGray bg-black !opacity-100 px-3 w-full max-w-lg"
//                     placeholder="Search..."
//                 />
//             </div> */}
//               <div className="hidden md:flex flex-1 max-w-2xl mx-4">
//         <Search
//           searchType="POSTS"
//           className="w-full rounded-full border-themeGray bg-black px-4 py-2 focus:ring-2 focus:ring-themeAccent"
//           placeholder="Search posts, groups, or users..."
//           aria-label="Search posts"
//         />
//       </div>

//             {/* Right actions */}
//             <div className="flex items-center gap-3">
//                 {/* Create Group - visible only on md+ */}
//                 <Link href="/group/create" className="hidden md:inline">
//                     <Button
//                         variant="outline"
//                         className="bg-themeBlack rounded-2xl flex gap-2 border-themeGray hover:bg-themeGray"
//                     >
//                         <CheckBadge />
//                         Create Group
//                     </Button>
//                 </Link>

//                 {/* User or Sign In */}
//                 {isSignedIn && user ? (
//                     <UserWidget
//                         userid={userid}
//                         groupid={groupid}
//                         image={user.imageUrl || "/default-avatar.png"}
//                     />
//                 ) : (
//                     <Link href="/sign-in">
//                         <Button variant="ghost" className="text-white">
//                             Sign In
//                         </Button>
//                     </Link>
//                 )}
//             </div>
//         </nav>
//     )
// }

"use client"

import { UserWidget } from "@/components/global/user-widget"
import { Button } from '@/components/ui/button'
import { CheckBadge } from '@/icons'
import { useUser } from '@clerk/nextjs'
import { Menu } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'


// Lazy load heavy components
const GlassSheet = dynamic(() => import('@/components/global/glass-sheet'), {
  loading: () => (
    <button aria-label="Open Menu" className="text-white md:hidden">
      <Menu className="w-6 h-6" />
    </button>
  ),
  ssr: false
})

const SideBar = dynamic(() => import('@/components/global/sidebar'))
const Search = dynamic(() => import('@/components/global/search'), {
  ssr: false
})

type NavbarProps = {
  groupid: string
  userid: string
}

export const Navbar = ({ groupid, userid }: NavbarProps) => {
  const { user, isSignedIn } = useUser()

  return (
    <header className="bg-[#1A1A1D] py-2 px-3 md:px-7 md:py-5 flex items-center justify-between gap-5 sticky top-0 z-50">
      {/* Mobile Sidebar Trigger */}
      <div className="flex items-center gap-3 md:hidden">
        <GlassSheet
          trigger={
            <button 
              aria-label="Open Menu" 
              className="text-white focus:outline-none focus:ring-2 focus:ring-themeAccent rounded-md p-1"
            >
              <Menu className="w-6 h-6" />
            </button>
          }
        >
          <SideBar groupid={groupid} userid={userid} mobile />
        </GlassSheet>
      </div>

      {/* Search Bar */}
      {/* <div className="flex-1 flex justify-center">
        <Search
          searchType="POSTS"
          className="hidden md:block rounded-full border-themeGray bg-black px-3 w-full max-w-lg focus:ring-2 focus:ring-themeAccent"
          placeholder="Search..."
          aria-label="Search posts"
        />
      </div> */}
       <div className="hidden md:flex flex-1 max-w-2xl mx-4">
        <Search
          searchType="POSTS"
          className="w-full rounded-full border-themeGray bg-black px-4 py-2 focus:ring-2 focus:ring-themeAccent"
          placeholder="Search posts, groups, or users..."
          aria-label="Search posts"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        {/* Create Group Button - Desktop Only */}
        <Link 
          href="/group/create" 
          className="hidden md:inline"
          aria-label="Create new group"
        >
          <Button
            variant="outline"
            className="bg-themeBlack rounded-2xl flex gap-2 border-themeGray hover:bg-themeGray focus:ring-2 focus:ring-themeAccent"
          >
            <CheckBadge aria-hidden="true" />
            <span>Create Group</span>
          </Button>
        </Link>

        {/* User Widget or Sign In */}
        {isSignedIn && user ? (
          <UserWidget
            userid={userid}
            groupid={groupid}
            image={user.imageUrl || "/default-avatar.png"}
          />
        ) : (
          <Link href="/sign-in" passHref legacyBehavior>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-themeGray focus:ring-2 focus:ring-themeAccent"
              aria-label="Sign in"
            >
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </header>
  )
}
