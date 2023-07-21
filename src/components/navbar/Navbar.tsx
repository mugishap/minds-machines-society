import React from 'react'
import { sidebarLinks } from '../../utils/data'
import { ISidebarLink } from '../../types'

const Navbar: React.FC = () => {
    return (
        <div className='w-full rounded-xl bg-white dark:bg-[#323232] p-8'>
            <span className='font-bold text-2xl dark:text-white'>
                {
                    sidebarLinks.map((link: ISidebarLink) =>
                        window.location.pathname === link.path ? link.navbarHeading : ""
                    )
                }
            </span>
        </div>
    )
}

export default Navbar