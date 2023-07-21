import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className='w-full flex h-screen'>
            <Sidebar />
            <div className='w-9/12 flex flex-col bg-[#EDEDED] dark:bg-[#222222] min-h-screen overflow-y-scroll p-10'>
                <Navbar />
                <div className='flex flex-col mt-6'>{children}</div>
            </div>
        </div>
    )
}

export default Layout