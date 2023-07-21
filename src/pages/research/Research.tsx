import React from 'react'
import Layout from '../../layout/Layout'
import { researches } from '../../utils/data'
import { IResearch } from '../../types'

const Research: React.FC = () => {
    return (
        <Layout>
            <span className='font-bold text-2xl'>Below is an overview of the technical areas currently being researched by the Minds, Machines, and Society group:</span>
            <div className='flex flex-col my-6 w-full'>
                {
                    researches.map((research: IResearch, index: number) => {
                        return (
                            <div className='flex flex-col w-full' key={index}>
                                <span className='font-semibold text-xl'>{research.heading}</span>
                                <div className='w-full flex justify-between'>
                                    <div className='w-8/12 flex flex-col'>
                                        <span className='text-[#222222] my-6'>{research.subheading}</span>
                                        <ul className='list-disc pl-6'>
                                            {
                                                research.concepts.map((concept: string, index: number) => (
                                                    <li key={index}>{concept}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <img src={research.image} className='w-52 h-52' alt={research.heading} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default Research