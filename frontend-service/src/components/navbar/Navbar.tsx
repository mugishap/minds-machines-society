import React from 'react'
import { sidebarLinks } from '../../utils/data'
import { ISidebarLink } from '../../types'
import { BiMenu } from 'react-icons/bi'
import { CommonContext } from '../../context'

const Navbar: React.FC = () => {
    const { setShowSidebar } = React.useContext(CommonContext)
    return (
        <div className='w-full rounded-xl bg-white dark:bg-[#323232] p-8 flex items-center justify-between'>
            <span className='font-bold text-2xl dark:text-white'>
                {
                    sidebarLinks.map((link: ISidebarLink) =>
                        window.location.pathname === link.path ? link.navbarHeading : ""
                    )
                }
            </span>
            <BiMenu size={25} className="flex cursor-pointer lg:hidden dark:text-white" onClick={() => setShowSidebar(true)} />
        </div>
    )
}

export default Navbar