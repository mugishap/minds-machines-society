import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className='w-screen flex'>
            <Sidebar />
            <div className='w-9/12 flex flex-col bg-[#EDEDED] min-h-screen overflow-y-scroll p-10'>
                <Navbar />
                <div className='flex flex-col'>{children}</div>
            </div>
        </div>
    )
}

export default Layout