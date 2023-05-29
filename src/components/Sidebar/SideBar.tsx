import {FiMenu} from "react-icons/fi";
import NavList from "./NavList.tsx";

type SideBarProp  = {
	isSidebarOpen : boolean
	toggleSidebar  : any
}

export function SideBar({isSidebarOpen,toggleSidebar}  :  SideBarProp) {
	return (
		<>
			<div
				className={`fixed top-[65px] sm:top-0 inset-y-0 left-0 z-30 w-64 bg-white text-black transition-transform duration-300 transform ${
					isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
				} sm:relative sm:translate-x-0 sm:w-64`}
			>
				{/* Sidebar toggle button (visible on large screens) */}
				<button
					className="hidden absolute top-4 right-4 z-40 p-2 text-white bg-red-200 rounded-full"
					onClick={toggleSidebar}
				>
					<FiMenu size={24} />
				</button>

				{/* Sidebar content */}
				<NavList FreeScreen={isSidebarOpen == true  ? true : false} />
			</div></>
	)
}