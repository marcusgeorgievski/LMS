import Navbar from "./_components/navbar"
import Sidebar from "./_components/sidebar"

interface Props {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
    return (
        <div className="h-full">
            <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full">
                <Navbar />
            </div>
            <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                <Sidebar />
            </div>
            <main className="md:pl-56 h-full">{children}</main>
        </div>
    )
}
