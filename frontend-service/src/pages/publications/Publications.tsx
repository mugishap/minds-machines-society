import React from 'react'
import Layout from '../../layout/Layout'
import { FaTag } from 'react-icons/fa'
import { TbCirclesRelation } from 'react-icons/tb'
import { CommonContext } from '../../context'
import { IPublication } from '../../types'

const Publications: React.FC = () => {

    const { publications } = React.useContext(CommonContext)

    return (
        <Layout>
            <div className='bg-white w-full rounded-3xl  p-3 px-6 flex justify-between items-center mb-6 dark:bg-[#323232]'>
                <input type="text" placeholder='Search...' className='outline-none bg-inherit w-8/12 dark:text-white' />
                <div className='flex items-center'>
                    <FaTag size={20} className="mx-3 text-[#575757] dark:text-white" />
                    <TbCirclesRelation size={25} className="mx-3 text-[#575757] rotate-45 dark:text-white" />
                </div>
            </div>
            {
                publications.length > 0 && publications.map((publication: IPublication, index: number) => (
                    <div key={index} className='flex flex-col bg-white rounded-2xl p-10 h-[60vh] overflow-y-scroll my-6 dark:bg-[#323232] dark:text-white'>
                        <span className='font-bold text-xl'>{publication.title}</span>
                        {
                            publication.articles.length > 0 && publication.articles.map((article, _index) => (
                                <div key={_index} className='my-6 rounded-xl bg-[#F8F8F8] flex flex-col p-6 dark:bg-[#292929]'>
                                    <span className=' font-bold text-lg underline'>{article.name}</span>
                                    <span className='my-6'>
                                        {article.collaborators}
                                    </span>
                                    <span className='font-bold'>{article.time}</span>
                                    <span className="text-[#484848] my-6 dark:text-[#BABABA]">{article.description}</span>
                                </div>
                            ))}
                    </div>
                ))}
        </Layout>
    )
}

export default Publications