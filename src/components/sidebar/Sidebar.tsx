import Switch from '@mui/material/Switch'
import React from 'react'
import { BsFillMoonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CommonContext } from '../../context'
import { ISidebarLink } from '../../types'
import { sidebarLinks } from '../../utils/data'

const Sidebar: React.FC = () => {
    const { theme, setTheme } = React.useContext(CommonContext)
    return (
        <div className='w-3/12 flex flex-col bg-white shadow-lg justify-between px-4 py-10 dark:bg-[#202020]'>
            <div>
                <span className='font-extrabold text-4xl text-center dark:text-white'>LOGO</span>
                <div className='flex flex-col px-6 mt-10 w-full'>
                    {
                        sidebarLinks.map((link: ISidebarLink, index: number) => {
                            return (
                                <Link to={link.path} key={index}>
                                    <button className={`flex w-full hover:bg-[#EEEEEE] hover:dark:bg-[#323232] items-center ${window.location.pathname === link.path && "bg-[#EEEEEE] dark:bg-[#323232]"} my-3 rounded-lg p-3`}>
                                        <link.icon size={25} className=' mr-3 dark:text-white' />
                                        <span className='dark:text-white'>{link.title}</span>
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
                <Switch onClick={() => setTheme(() => theme == "dark" ? "light" : "dark")} id='mode-switcher' color='primary' />
            </label>
        </div>
    )
}

export default Sidebar