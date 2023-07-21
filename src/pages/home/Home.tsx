import React from 'react'
import Layout from '../../layout/Layout'
import { All } from '../../assets'
import { markupToText } from '../../utils/format'
import { description, intro, news } from '../../utils/data'
import { INew } from '../../types'

const Home: React.FC = () => {
    return (
        <Layout>
            <img src={All} alt="All members image" className='w-full object-cover rounded-2xl' />
            <div className='p-6 px-10 rounded-lg bg-white my-6'>
                <span className="text-[17px]" dangerouslySetInnerHTML={{ __html: markupToText(intro) }}></span>
            </div>
            <div className='p-6 px-10 rounded-lg bg-white my-6'>
                <span className="text-[17px]" dangerouslySetInnerHTML={{ __html: markupToText(description) }}></span>
            </div>
            <div className='p-6 px-10 rounded-lg bg-white my-6'>
                <span className='font-bold text-xl'>Recent News</span>
                <div className='flex flex-col mt-4'>
                    {news.map((item: INew, index: number) => (
                        <div className='p-6 bg-[#F8F8F8] flex flex-col rounded-2xl my-3' key={index}>
                            <span className='flex items-center mb-4'>
                                <span className='text-[#FF6737]'>{"["}</span>
                                {
                                    new Intl.DateTimeFormat('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    }).format(new Date(item.date))
                                }
                            </span>
                            <span>
                                <span className="text-[17px]" dangerouslySetInnerHTML={{ __html: markupToText(item.text) }}></span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Layout >
    )
}

export default Home