import {Link} from "react-router-dom";



const NavList = ({FreeScreen}: any) => {
	const navItems = [
		{
		title : 'Dashboard',
		link: '/',
		},
		{
			title : 'Profile',
			link: '/admin/profile',
		},
		{
			title : 'My Account',
			link: '/account',
		},
		{
			title : 'Payment History',
			link: '/m/payment',
		},
		{
			title : 'Beneficiaries',
			link: '/beneficiaries',
		},
		{
			title : 'Documents',
			link: '/documents',
		},	{
			title : 'Applications',
			link: '/applications',
		},
	];

	const banks = ['PayPal', 'Paycover', 'Citi Bank'];

	return (
		<div className="flex flex-col px-10 justify-between max-h-[100vh] ">
			<div className="py-4">
				<h2 className="text-sm px-3 text-gray-500 font-medium">First Div</h2>
				<ul className="mt-4 flex-col">
					{navItems.map((item, index) => (
						<Link to={item.link}
							  key={index}
							onClick={FreeScreen}>
							<li className="py-2 hover:border-l-2 transition-border border-black w-full px-4">
								{item.title}
							</li>
						</Link>
					))}
				</ul>
			</div>
			<div className="py-4">
				<h2 className="text-sm px-3 text-gray-500 font-medium ">Quick Links</h2>
				<ul className="mt-4">
					{banks.map((bank, index) => (
						<li key={index} className="py-3  hover:border-l-2 transition-all border-black w-full px-4">
							{bank}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default NavList;
