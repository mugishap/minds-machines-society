import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'
import { CommonContext } from '../context'
import MobileSidebar from '../components/sidebar/MobileSidebar'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    const { showSidebar } = React.useContext(CommonContext)

    return (
        <div className='w-full flex h-screen'>
            {
                showSidebar && <MobileSidebar />
            }
            <Sidebar />
            <div className='w-full lg:w-9/12 flex flex-col bg-[#EDEDED] dark:bg-[#222222] min-h-screen overflow-y-scroll p-4 sm:p-10'>
                {window.location.pathname !== "/admin" && <Navbar />}
                <div className='flex flex-col mt-6'>{children}</div>
            </div>
        </div>
    )
}

export default Layout