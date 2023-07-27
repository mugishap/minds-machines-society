import React, { FormEvent, useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import { BiMenu } from 'react-icons/bi'
import { CommonContext } from '../../context'
import AdminPanel from '../../components/admin/AdminPanel'
import CreateNews from '../../components/admin/CreateNews'
import CreatePublication from '../../components/admin/CreatePublication'

const Admin: React.FC = () => {

    const { setShowSidebar, isLoggedIn, setIsLoggedIn } = React.useContext(CommonContext)
    const [mode, setMode] = useState<'create-news' | 'create-publication' | 'admin-panel'>('admin-panel')
    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout>
            {
                isLoggedIn ?
                    <div className='w-full flex flex-col'>
                        <div className='w-full rounded-xl bg-white dark:bg-[#323232] p-8 flex items-center justify-between'>
                            <span className='font-bold text-2xl dark:text-white'>
                                Admin Panel
                            </span>
                            <BiMenu size={25} className="flex cursor-pointer lg:hidden dark:text-white" onClick={() => setShowSidebar(true)} />
                        </div>
                        <div>
                            {mode === 'admin-panel' && <AdminPanel />}
                            {mode === 'create-news' && <CreateNews />}
                            {mode === 'create-publication' && <CreatePublication />}
                        </div>
                    </div>
                    :
                    <div className='w-full flex flex-col'>

                    </div>
            }
        </Layout>
    )
}

export default Admin