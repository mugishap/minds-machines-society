import React, { useContext } from 'react'
import { All } from '../../assets'
import { CommonContext } from '../../context'
import Layout from '../../layout/Layout'
import { INews } from '../../types'
import { description, intro } from '../../utils/data'
import { markupToText } from '../../utils/format'

const Home: React.FC = () => {
    const { theme, news } = useContext(CommonContext)
    return (
        <Layout>
            <img src={All} alt="All members image" className='w-full object-cover rounded-2xl' />
            <div className='p-6 px-10 rounded-lg bg-white my-6 dark:bg-[#323232]'>
                <span className="text-[17px] dark:text-white" dangerouslySetInnerHTML={{ __html: markupToText(intro, theme) }}></span>
            </div>
            <div className='p-6 px-10 rounded-lg bg-white my-6 dark:bg-[#323232]'>
                <span className="text-[17px] dark:text-white" dangerouslySetInnerHTML={{ __html: markupToText(description, theme) }}></span>
            </div>
            <div className='p-6 px-10 rounded-lg bg-white my-6 dark:bg-[#323232]'>
                <span className='font-bold text-xl dark:text-white'>Recent News</span>
                <div className='flex flex-col mt-4'>
                    {news.map((item: INews, index: number) => (
                        <div className='p-6 bg-[#F8F8F8] flex flex-col rounded-2xl my-3 dark:bg-[#292929]' key={index}>
                            <span className='flex items-center mb-4 dark:text-white'>
                                <span className='text-[#FF6737] dark:text-[#FFD337]'>{"["}</span>
                                &nbsp;
                                {
                                    new Intl.DateTimeFormat('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    }).format(new Date(item?.created_at as number))
                                }
                                &nbsp;
                                <span className='text-[#FF6737] dark:text-[#FFD337]'>{"]"}</span>
                            </span>
                            <span>
                                <span className="text-[17px] dark:text-white" dangerouslySetInnerHTML={{ __html: markupToText(item.text, theme) }}></span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Layout >
    )
}

export default Home