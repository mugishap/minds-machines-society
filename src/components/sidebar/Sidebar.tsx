import React from 'react'
import { Link } from 'react-router-dom'
import { sidebarLinks } from '../../utils/data'
import { ISidebarLink } from '../../types'
import { BsFillMoonFill } from 'react-icons/bs'
import Switch from '@mui/material/Switch';

const Sidebar: React.FC = () => {
    return (
        <div className='w-3/12 flex flex-col bg-white shadow-lg justify-between px-4 py-10'>
            <div>
                <span className='font-extrabold text-4xl text-center'>LOGO</span>
                <div className='flex flex-col px-6 mt-10 w-full'>
                    {
                        sidebarLinks.map((link: ISidebarLink, index: number) => {
                            return (
                                <Link to={link.path} key={index}>
                                    <button className={`flex w-full hover:bg-[#EEEEEE] items-center ${window.location.pathname === link.path && "bg-[#EEEEEE]"} my-3 rounded-lg p-3`}>
                                        <link.icon size={25} className=' mr-3' />
                                        <span className=''>{link.title}</span>
                                    </button>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <label htmlFor='mode-switcher' className='px-6 rounded-3xl cursor-pointer py-2 flex items-center bg-[#eee] w-fit'>
                <BsFillMoonFill size={25} className='' />
                <span className='mx-4'>Dark Mode</span>
                <Switch id='mode-switcher' color='primary' />
            </label>
        </div>
    )
}

export default Sidebar