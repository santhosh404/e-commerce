import React, { useState } from 'react'
import Search from './Search'
import { BiCart, BiLogInCircle, BiMenu } from 'react-icons/bi'
import { Breadcrumb, Drawer } from 'antd';

const Header = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className=' bg-black h-20 flex justify-between items-center flex-wrap px-10 fixed top-0 w-full z-50'>
            <h1 className='text-white'>E-commerce</h1>
            <Search />
            <div className='hidden lg:flex gap-2'>
                <h1 className='text-white flex gap-2 cursor-pointer items-center transition-colors duration-300 hover:text-blue-400 hover:bg-gray-800 p-2 rounded'>
                    Login <BiLogInCircle />
                </h1>
                <h1 className='text-white flex gap-2 cursor-pointer items-center transition-colors duration-300 hover:text-blue-400 hover:bg-gray-800 p-2 rounded'>
                    Cart <BiCart />
                </h1>
            </div>

            <div className='lg:hidden flex items-center'>
                <BiMenu
                    className="text-white text-3xl cursor-pointer"
                    onClick={showDrawer}
                />
            </div>

            {/* Drawer for mobile navigation */}
            <Drawer
                title="Menu"
                placement="left"
                closable={true}
                onClose={onClose}
                open={visible}
                className="lg:hidden"
            >
                <h1 className='text-[18px] flex gap-2 cursor-pointer items-center transition-colors duration-300 hover:text-blue-400 hover:bg-gray-800 p-2 rounded'>
                    <BiLogInCircle /> Login
                </h1>
                <h1 className='text-[18px] mt-5 flex gap-2 cursor-pointer items-center transition-colors duration-300 hover:text-blue-400 hover:bg-gray-800 p-2 rounded'>
                    <BiCart /> Cart
                </h1>
            </Drawer>
        </div>
    )
}

export default Header