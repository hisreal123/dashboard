
import { useState} from 'react'
import { FiMenu } from 'react-icons/fi';

import { Outlet } from "react-router-dom";
import {SideBar} from "../Sidebar/SideBar.tsx";
import Header from "./Header.tsx";


const Layout = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};


	return (
		<>
			<Header />
			<section className="flex h-screen overflow-hidden bg-gray-100 mt-[62px]">
				{/*SideBAr*/}
				<SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

					{/* Main content */}
					<div className=" flex-1  ">
						{/* Sidebar toggle button (visible on small screens) */}
						<button
							className="fixed bottom-4 right-4 z-40 p-2 text-white bg-gray-600 rounded-full sm:hidden"
							onClick={toggleSidebar}
						>
							<FiMenu size={24} />
						</button>

						<div id="detail" className=" ">
							<Outlet/>
						</div>
					</div>


				{/* Overlay */}
				{isSidebarOpen && (
					<div
						className="fixed inset-0 z-20 bg-black opacity-50 sm:hidden"
						onClick={toggleSidebar}
					/>
				)}

			</section>
		</>
	)
}

export default Layout