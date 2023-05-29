import {FaPrint} from "react-icons/fa";
import {CgClose} from "react-icons/cg";
import {useState} from "react";
// import { useSelector} from "react-redux";
// import {selectAllUser} from "../redux/slices/UserSlice.ts";

export const Dashboard = () => {


    const [isShow, setIsShow] = useState(true);


    // const user :any  = useSelector(selectAllUser)


    return (
        <>
            <section className='py-10 px-5'>
                <div className=' grid grid-cols-1 md:grid-cols-4'>
                    <div className='col-span-3'>
                        <div className='flex justify-between items-center px-2 sm:px-0'>
                            <h1 className='font-medium'>Dashboard </h1>
                            <span className='flex items-center text-gray-500 text-xs cursor-pointer hover:text-gray-800'>
                                <FaPrint className='mr-1' />
                                Print
                            </span>
                        </div>

                        {/*Banner*/}
                        {isShow && (
                         <div className='mt-5 px-5 rounded-md bg-gray-900 py-4 flex justify-between'>
                             <div>
                                 <h2 className='text-white font-medium text-xl md:text-2xl '>Welcome to your Dashboard</h2>
                                 <p className='text-gray-200 my-3 text-sm font-light'> The best for your website management</p>
                                 <button className='text-black bg-white rounded-sm px-2 text-xs md:text-sm  py-1'> Learn more</button>
                             </div>

                             <CgClose
                                 className='text-white tran hover:scale-125 transition-all delay-75'
                                onClick={()=> setIsShow(false)}/>
                         </div>
                        )}

                        {/*user Profile*/}
                        <div className='grid '>
                            <div>
                                <h1></h1>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

