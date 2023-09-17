import React, { FormEvent, useState } from 'react'
import { BiLoaderAlt, BiMenu } from 'react-icons/bi'
import { toast } from 'react-toastify'
import AdminPanel from '../../components/admin/AdminPanel'
import CreateNews from '../../components/admin/CreateNews'
import CreatePublication from '../../components/admin/CreatePublication'
import { CommonContext } from '../../context'
import { useLogin } from '../../hooks'
import Layout from '../../layout/Layout'
import { ILoginData } from '../../types'
import UpdatePassword from '../../components/admin/UpdatePassword'

const Admin: React.FC = () => {

    const { setShowSidebar, isLoggedIn, setIsLoggedIn, } = React.useContext(CommonContext)
    const [loginData, setLoginData] = useState<ILoginData>({
        username: "",
        password: "",
        showPassword: false
    })
    const [loading, setLoading] = useState<boolean>(false)
    const [mode, setMode] = useState<'create-news' | 'create-publication' | 'admin-panel' | 'update-password'>('admin-panel')
    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            if (!loginData.username || !loginData.password) return toast.error("Please fill all the fields")
            await useLogin({ data: loginData, setIsLoggedIn, setLoading })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout>
            <BiMenu size={25} className="flex absolute top-8 right-8 cursor-pointer lg:hidden dark:text-white" onClick={() => setShowSidebar(true)} />
            {
                isLoggedIn ?
                    <div className='w-full flex flex-col'>
                        <div className='w-11/12 mb-4 flex p-2 bg-[#ddd] items-center rounded-lg shadow-lg'>
                            <button className={`w-1/4 py-2 mx-2 ${mode === 'admin-panel' ? ' bg-[#ccc]' : 'bg-inherit'} rounded-lg cursor-pointer px-4`} onClick={() => setMode('admin-panel')}>Admin Panel</button>
                            <button className={`w-1/4 py-2 mx-2 ${mode === 'create-publication' ? ' bg-[#ccc]' : 'bg-inherit'} rounded-lg cursor-pointer px-4`} onClick={() => setMode('create-publication')}>Create Publication</button>
                            <button className={`w-1/4 py-2 mx-2 ${mode === 'create-news' ? ' bg-[#ccc]' : 'bg-inherit'} rounded-lg cursor-pointer px-4`} onClick={() => setMode('create-news')}>Create News</button>
                            <button className={`w-1/4 py-2 mx-2 ${mode === 'update-password' ? ' bg-[#ccc]' : 'bg-inherit'} rounded-lg cursor-pointer px-4`} onClick={() => setMode('update-password')}>Update Password</button>
                        </div>
                        <div>
                            {mode === 'admin-panel' && <AdminPanel />}
                            {mode === 'create-news' && <CreateNews />}
                            {mode === 'create-publication' && <CreatePublication />}
                            {mode === 'update-password' && <UpdatePassword />}
                        </div>
                    </div>
                    :
                    <div className='w-full flex flex-col items-center'>
                        <form className='w-11/12 sm:w-9/12 lg:w-5/12 flex flex-col items-center' onSubmit={handleLogin}>
                            <span className='font-bold text-2xl mb-8 dark:text-white'>Login</span>
                            <div className='w-full'>
                                <label className="text-sm font-medium leading-none text-gray-800 dark:text-white">
                                    Username
                                </label>
                                <input
                                    aria-label="enter username"
                                    role="input"
                                    type="text"
                                    className="bg-gray-200  border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                    placeholder="Username"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setLoginData({ ...loginData, username: e.target.value });
                                    }}
                                    value={loginData.username}
                                />
                            </div>
                            <div className="mt-6  w-full">
                                <label className="text-sm font-medium leading-none text-gray-800 dark:text-white">
                                    Password
                                </label>
                                <div className="relative flex items-center justify-center">
                                    <input
                                        aria-label="enter Password"
                                        role="input"
                                        type={loginData.showPassword ? "text" : "password"}
                                        className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                        placeholder="Enter password"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginData({ ...loginData, password: e.target.value })}
                                        value={loginData.password}
                                    />
                                    <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                        <svg
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            onClick={() => setLoginData({ ...loginData, showPassword: !loginData.showPassword })}
                                        >
                                            <path
                                                d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                                fill="#71717A"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 w-full">
                                <button
                                    role="button"
                                    aria-label="login "
                                    className="focus:ring-2 flex items-center dark:bg-slate-800 justify-center focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none  text-white dark:border-none dark:outline-none bg-green-500 border rounded hover:bg-green-600 duration-1000 ring py-4 w-full disabled:bg-slate-600"
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? <BiLoaderAlt className="animate-spin" size={25} /> : "LOGIN"}
                                </button>
                            </div>
                        </form>
                    </div>
            }
        </Layout>
    )
}

export default Admin