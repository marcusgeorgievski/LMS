"use client"
import { Home } from "lucide-react"
import { Compass } from "lucide-react"
import SidebarItem from "./sidebar-item"

const guestRoutes = [
    {
        label: "Dashboard",
        href: "/",
        icon: Home,
    },
    {
        label: "Browse",
        href: "/search",
        icon: Compass,
    },
]

export default function SidebarRoutes() {
    return (
        <div className="flex flex-col w-full">
            {guestRoutes.map((route) => (
                <SidebarItem
                    key={route.href}
                    href={route.href}
                    label={route.label}
                    icon={route.icon}
                />
            ))}
        </div>
    )
}
