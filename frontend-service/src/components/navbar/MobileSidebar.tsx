import React from 'react'
import { CommonContext } from '../../context'
import { sidebarLinks } from '../../utils/data'
import { ISidebarLink } from '../../types'
import { Link } from 'react-router-dom'
import { BsFillMoonFill } from 'react-icons/bs'
import { Switch } from '@mui/material'

const MobileNavbar: React.FC = () => {
  const { setShowSidebar } = React.useContext(CommonContext)
  const { theme, setTheme } = React.useContext(CommonContext)

  return (
    <div className='absolute w-screen h-screen bg-black/70 backdrop-blur-sm z-10 '>
      <div className="w-full h-full absolute z-20" onClick={() => setShowSidebar(false)}></div>
      <div className='z-30 bg-white h-full w-8/12 sm:w-1/2 flex flex-col absolute top-0 left-0 shadow-lg justify-between px-4 py-10 dark:bg-[#202020]'>
        <div>
          <span className='font-extrabold text-4xl text-center dark:text-white'>LOGO</span>
          <div className='flex flex-col px-6 mt-10 w-full'>
            {
              sidebarLinks.map((link: ISidebarLink, index: number) => {
                return (
                  <Link to={link.path} key={index} onClick={() => setShowSidebar(false)}>
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
    </div>
  )
}

export default MobileNavbar