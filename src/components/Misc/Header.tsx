import { FaBell } from 'react-icons/fa';
import {BiSearch} from "react-icons/bi";

const Header = () => {

	return (
		<header className="flex fixed top-0 w-full bg-white  items-center justify-between px-4 py-4 md:px-8 shadow-lg z-50">
			<div className='flex items-center'>
				<div className="logo text-lg font-bold">Logo</div>

				<div className=" hidden md:w-[400px] h-fit  md:flex items-center search mx-4 md:ml-20 rounded-r-md
				focus:outline-none focus:ring-1 focus:ring-gray-200 bg-black overflow-hidden transition-all delay-100">
					<input
						className=" bg-gray-200 px-3 py-2 text-xs w-[90%]"
						type="text"
						placeholder="Search for somthing..."
					/>
					<BiSearch className=' text-white mx-3'/>
				</div>

			</div>

			<div className="flex items-center ">
				<div className="notification mr-4">
					<FaBell className="md:text-2xl " />
				</div>
				<div className="profile flex items-center space-x-2">
					<img
						className="w-5 h-5 rounded-full"
						src="profile-image.jpg"
						alt="Profile"
					/>
					<span className="text-sm font-medium hidden md:block">John Doe</span>
				</div>
			</div>

		</header>
	);
};

export default Header;
