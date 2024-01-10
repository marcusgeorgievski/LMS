import Logo from "./logo"
import SidebarRoutes from "./sidebar-routes"

interface Props {
    //children: React.ReactNode;
}

export default function Sidebar() {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className="p-6">
                <Logo />
            </div>

            <div className="flex flex-full w-full ">
                <SidebarRoutes />
            </div>
        </div>
    )
}
