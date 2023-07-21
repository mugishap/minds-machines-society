import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import { teachings } from '../../utils/data'
import { Link } from 'react-router-dom'
import { BsGridFill } from 'react-icons/bs'
import { FaListUl } from 'react-icons/fa'

const Teaching: React.FC = () => {
    const [view, setView] = useState<'list' | 'grid'>('list')
    return (
        <Layout>
            {view === 'list' && teachings.map((teaching, index) => (
                <span key={index} className='flex my-3 dark:text-white'><Link className='underline text-[#FF6737] mr-2 dark:text-[#FFD337]' to={teaching.url}>{teaching.title}</Link>{teaching.metadata}</span>
            ))}
            {view === 'grid' && <div className='w-full grid grid-cols-3'>
                {
                    teachings.map((teaching, index) => (
                        <span key={index} className='flex h-48 my-3 flex-col p-4 bg-white items-center w-11/12 rounded-xl dark:text-white dark:bg-[#323232]'><Link className='underline text-[#FF6737] mr-2 dark:text-[#FFD337]' to={teaching.url}>{teaching.title}</Link>{teaching.metadata}</span>
                    ))
                }
            </div>
            }
            <div className='rounded shadow-lg absolute bottom-3 right-3 p-2 bg-[#ddd] flex items-center dark:bg-[#323232]'>
                <button onClick={() => setView('list')} className={`${view === 'list' ? 'bg-white dark:bg-[#bababa]' : 'dark:text-white bg-inherit'} h-10 w-10 rounded mx-2 flex items-center justify-center `}><FaListUl size={20} /></button>
                <button onClick={() => setView('grid')} className={`${view === 'grid' ? 'bg-white dark:bg-[#bababa]' : 'dark:text-white bg-inherit'} h-10 w-10 rounded mx-2 flex items-center justify-center`}><BsGridFill size={20} /></button>
            </div>
        </Layout>
    )
}

export default Teaching