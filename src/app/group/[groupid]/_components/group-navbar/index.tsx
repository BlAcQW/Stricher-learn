// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { GROUPLE_CONSTANTS } from "@/constants"

// import { useNavigation } from "@/hooks/navigation"
// import { cn } from "@/lib/utils"
// import Link from "next/link"

// type MenuProps = {
//     orientation: "mobile" | "desktop"
// }

// const Menu = ({ orientation }: MenuProps) => {
//     const { section, onSetSection } = useNavigation()
//     switch (orientation) {
//         case "desktop":
//             return (
//                 <Card className="bg-themeGray border-themeGray bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-2xl bg-opacity-60 p-1 lg:flex  md:rounded-xl flex items-center justify-center w-fit">
//                     <CardContent className="p-0 flex gap-2">
//                         {GROUPLE_CONSTANTS.groupPageMenu.map((menuItem) => (
//                             <Link
//                                 href={menuItem.path}
//                                 onClick={() => onSetSection(menuItem.path)}
//                                 className={cn(
//                                     "rounded-xl flex gap-2 py-2 px-4 items-center",
//                                     section == menuItem.path
//                                         ? "bg-[#09090B] border-[#27272A]"
//                                         : "",
//                                 )}
//                                 key={menuItem.id}
//                             >
//                                 {section == menuItem.path && menuItem.icon}
//                                 {menuItem.label}
//                             </Link>
//                         ))}
//                     </CardContent>
//                 </Card>
//             )

//         case "mobile":
//             return (
//                 <div className="flex flex-col mt-10">
//                     {GROUPLE_CONSTANTS.groupPageMenu.map((menuItem) => (
//                         <Link
//                             href={menuItem.path}
//                             onClick={() => onSetSection(menuItem.path)}
//                             className={cn(
//                                 "rounded-xl flex gap-2 py-2 px-4 items-center",
//                                 section == menuItem.path
//                                     ? "bg-themeGray border-[#27272A]"
//                                     : "",
//                             )}
//                             key={menuItem.id}
//                         >
//                             {menuItem.icon}
//                             {menuItem.label}
//                         </Link>
//                     ))}
//                 </div>
//             )
//         default:
//             return <></>
//     }
// }

// export default Menu

// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { GROUP_PAGE_MENU } from "@/constants/menus"

// import { useNavigation } from "@/hooks/navigation"
// import { cn } from "@/lib/utils"
// import Link from "next/link"
// import { useParams } from "next/navigation"

// type MenuProps = {
//     orientation: "mobile" | "desktop"
// }

// const Menu = ({ orientation }: MenuProps) => {
//     const { section, onSetSection } = useNavigation()
//     const params = useParams()
//     const groupid = params.groupid as string

//     const constructPath = (menuPath: string) => {
//         return `/group/${groupid}${menuPath ? `/${menuPath}`  : ""}`
//     }

//     const menuItems = GROUP_PAGE_MENU.groupPageMenu.map((menuItem) => ({
//         ...menuItem,
//         fullPath: constructPath(menuItem.path),
//     }))

//     const commonLinkProps = (fullPath: string) => ({
//         href: fullPath,
//         onClick: () => onSetSection(fullPath),
//         className: cn(
//             "rounded-xl flex gap-2 py-2 px-4 items-center transition-colors",
//             section === fullPath
//                 ? "bg-[#09090B] border-[#27272A]"
//                 : "hover:bg-accent/20",
//         ),
//     })

//     return (
//         <>
//             {orientation === "desktop" ? (
//                 <Card className="bg-themeGray border-themeGray bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 p-1 lg:flex md:rounded-xl flex items-center justify-center w-fit">
//                     <CardContent className="p-0 flex gap-2">
//                         {menuItems.map(({ id, icon, label, fullPath }) => (
//                             <Link
//                                 {...commonLinkProps(fullPath)}
//                                 key={id}
//                                 aria-current={
//                                     section === fullPath ? "page" : undefined
//                                 }
//                             >
//                                 <span
//                                     className={cn(
//                                         "shrink-0",
//                                         section === fullPath
//                                             ? "text-primary"
//                                             : "text-muted-foreground",
//                                     )}
//                                 >
//                                     {icon}
//                                 </span>
//                                 {label}
//                             </Link>
//                         ))}
//                     </CardContent>
//                 </Card>
//             ) : (
//                 <div className="flex flex-col mt-10 gap-2">
//                     {menuItems.map(({ id, icon, label, fullPath }) => (
//                         <Link
//                             {...commonLinkProps(fullPath)}
//                             key={id}
//                             aria-current={
//                                 section === fullPath ? "page" : undefined
//                             }
//                         >
//                             <span
//                                 className={cn(
//                                     "shrink-0",
//                                     section === fullPath
//                                         ? "text-primary"
//                                         : "text-muted-foreground",
//                                 )}
//                             >
//                                 {icon}
//                             </span>
//                             {label}
//                         </Link>
//                     ))}
//                 </div>
//             )}
//         </>
//     )
// }

// export default Menu

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GROUP_PAGE_MENU } from "@/constants/menus"
import { useNavigation } from "@/hooks/navigation"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useParams } from "next/navigation"

type MenuProps = {
    orientation: "mobile" | "desktop"
}

const Menu = ({ orientation }: MenuProps) => {
    const { section, onSetSection } = useNavigation()
    const params = useParams()
    const groupid = params.groupid as string
    const channelid = params.channelid as string // Add this for channel routes

    const constructPath = (
        menuItem: (typeof GROUP_PAGE_MENU.groupPageMenu)[0],
    ) => {
        switch (menuItem.id) {
            case 0: // Group
                return `/group/${groupid}/channel/${channelid}`
            case 1: // Courses
                return `/group/${groupid}/courses`
            case 2: // Events
                return `/group/${groupid}/explore` // Or your actual events path
            case 4: // About
                return `/about/${groupid}`
            case 5: // Huddle
                return `/group/${groupid}/explore` // Or your actual huddle path
            default:
                return `/group/${groupid}${menuItem.path ? `/${menuItem.path}` : ""}`
        }
    }

    const menuItems = GROUP_PAGE_MENU.groupPageMenu.map((menuItem) => ({
        ...menuItem,
        fullPath: constructPath(menuItem),
    }))

    const commonLinkProps = (fullPath: string) => ({
        href: fullPath,
        onClick: () => onSetSection(fullPath),
        className: cn(
            "rounded-xl flex gap-2 py-2 px-4 items-center transition-colors",
            section === fullPath
                ? "bg-[#09090B] border-[#27272A]"
                : "hover:bg-accent/20",
        ),
    })

    return (
        <>
            {orientation === "desktop" ? (
                <Card className="bg-themeGray border-themeGray bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 p-1 lg:flex md:rounded-xl flex items-center justify-center w-fit">
                    <CardContent className="p-0 flex gap-2">
                        {menuItems.map(({ id, icon, label, fullPath }) => (
                            <Link
                                {...commonLinkProps(fullPath)}
                                key={id}
                                aria-current={
                                    section === fullPath ? "page" : undefined
                                }
                            >
                                <span
                                    className={cn(
                                        "shrink-0",
                                        section === fullPath
                                            ? "text-primary"
                                            : "text-muted-foreground",
                                    )}
                                >
                                    {icon}
                                </span>
                                {label}
                            </Link>
                        ))}
                    </CardContent>
                </Card>
            ) : (
                <div className="flex flex-col mt-10 gap-2">
                    {menuItems.map(({ id, icon, label, fullPath }) => (
                        <Link
                            {...commonLinkProps(fullPath)}
                            key={id}
                            aria-current={
                                section === fullPath ? "page" : undefined
                            }
                        >
                            <span
                                className={cn(
                                    "shrink-0",
                                    section === fullPath
                                        ? "text-primary"
                                        : "text-muted-foreground",
                                )}
                            >
                                {icon}
                            </span>
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}

export default Menu
