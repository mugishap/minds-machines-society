import React from 'react'
import { Link } from 'react-router-dom'
import { sidebarLinks } from '../../utils/data'
import { ISidebarLink } from '../../types'

const Sidebar: React.FC = () => {
    return (
        <div className='w-3/12 flex flex-col bg-white shadow-lg px-4 pt-10 h-screen'>
            <span className='font-extrabold text-4xl text-center'>LOGO</span>

            <div className='flex flex-col'>
                {
                    sidebarLinks.map((link: ISidebarLink, index: number) => {
                        return (
                            <Link to={link.path} key={index}>
                                <button className={`flex items-center ${window.location.pathname === link.path && "bg-[#EEEEEE]"}`}></button>
                            </Link>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Sidebar