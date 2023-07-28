import React, { useContext } from 'react'
import { CommonContext } from '../../context'

const AdminPanel: React.FC = () => {

    const { news, publications } = useContext(CommonContext)

    return (
        <div className='w-full flex flex-col dark:text-white'>
            <span className='flex items-center my-2'> News: {news?.length ?? 0}</span>
            <span className='flex items-center my-2'> Publications: {publications?.length ?? 0}</span>
        </div>
    )
}

export default AdminPanel