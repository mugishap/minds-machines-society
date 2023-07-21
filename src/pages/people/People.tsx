import React from 'react'
import Layout from '../../layout/Layout'
import { Profile } from '../../assets'
import { alumni, profile, researchAssisstants } from '../../utils/data'
import { Link } from 'react-router-dom'

const People: React.FC = () => {
    return (
        <Layout>
            <div className='p-5 rounded-2xl text-2xl bg-white w-full text-[#FF6737] font-bold dark:text-[#FFD337] dark:bg-[#323232]'>PI</div>
            <div className='w-full flex my-6 '>
                <img src={Profile} className='mr-8 w-3/12 object-cover' alt="Profile image" />
                <div className='bg-white flex flex-col p-6 w-9/12 px-12 rounded-2xl text-lg dark:text-white dark:bg-[#323232]'>
                    <ul className='list-disc pl-4'>
                        <li className='font-bold my-1'>{profile.name}</li>
                        {
                            profile.roles.map((role, index) => (
                                <li className='font-bold text-lg my-1' key={index}>{role}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='w-full bg-white flex flex-col p-6 px-10 rounded-2xl my-6 dark:text-white dark:bg-[#323232]'>
                <span className='font-bold text-2xl mb-6'>Ph.D. Students</span>
                <ul className='list-disc pl-4'>
                    {
                        profile.phdStudents.map((student, index) => (
                            <li key={index} className='my-1'><Link to={student.url}>{student.name}</Link></li>
                        ))
                    }
                </ul>
            </div>
            <div className='w-full bg-white flex flex-col p-6 px-10 rounded-2xl my-6 dark:text-white dark:bg-[#323232]'>
                <span className='font-bold text-2xl mb-6'>Visiting Scholar</span>
                <ul className='list-disc pl-4'>
                    <li className='my-1'><Link to={profile.visitingScholar.url}>{profile.visitingScholar.name}</Link></li>
                </ul>
            </div>
            <div className='w-full bg-white flex flex-col p-6 px-10 rounded-2xl my-6 dark:text-white dark:bg-[#323232]'>
                <span className='font-bold text-2xl mb-6'>Master&apos;s Students</span>
                <ul className='list-disc pl-4'>
                    {
                        profile.mastersStudents.map((student, index) => (
                            <li key={index} className='my-1'>{student}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='w-full bg-white flex flex-col p-6 px-10 rounded-2xl my-6 dark:text-white dark:bg-[#323232]'>
                <span className='font-bold text-2xl mb-6'>Undergraduate Students</span>
                <ul className='list-disc pl-4'>
                    {
                        profile.undergraduateStudents.map((student, index) => (
                            <li key={index} className='my-1'>{student}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='p-5 rounded-2xl text-2xl bg-white w-full text-[#FF6737] font-bold dark:bg-[#323232] dark:text-[#FFD337]'>Alumni</div>
            <div className='w-full bg-white flex flex-col p-6 px-10 rounded-2xl my-6 dark:text-white dark:bg-[#323232]'>
                <span className='font-bold text-2xl mb-6'>Post-Docs</span>
                <ul className='list-disc pl-4'>
                    <li className='my-1'><Link to={alumni.postDocs.url} className='underline mr-2'>{alumni.postDocs.name}</Link>{alumni.postDocs.metadata}</li>
                </ul>
            </div>
            <div className='w-full bg-white flex flex-col p-6 px-10 rounded-2xl my-6 dark:text-white dark:bg-[#323232]' >
                <span className='font-bold text-2xl mb-6'>MSc Theses</span>
                <ul className='list-disc pl-4'>
                    {
                        alumni.mscTheses.map((these, index) => (
                            <li key={index} className='my-1'>{these}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='w-full bg-white flex flex-col p-6 px-10 rounded-2xl my-6 dark:text-white dark:bg-[#323232]'>
                <span className='font-bold text-2xl mb-6'>Undergraduate Senior Theses</span>
                <ul className='list-disc pl-4'>
                    {
                        alumni.undergraduateSeniorTheses.map((these, index) => (
                            <li key={index} className='my-1'>{these}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='p-5 rounded-2xl text-2xl bg-white w-full text-[#FF6737] font-bold dark:bg-[#323232] dark:text-[#FFD337]'>Research Assisstants</div>
            <div className='w-full bg-white flex flex-col p-6 px-10 rounded-2xl my-6 dark:text-white dark:bg-[#323232]'>
                <span className='font-bold text-2xl mb-6'>Ph.D. Students</span>
                <ul className='list-disc pl-4'>
                    {
                        researchAssisstants.phdStudents.map((these, index) => (
                            <li key={index} className='my-1'>{these}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='w-full bg-white flex flex-col p-6 px-10 rounded-2xl my-6 dark:text-white dark:bg-[#323232]'>
                <span className='font-bold text-2xl mb-6'>Masters Students</span>
                <ul className='list-disc pl-4'>
                    {
                        researchAssisstants.mastersStudents.map((these, index) => (
                            <li key={index} className='my-1'>{these}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='w-full bg-white flex flex-col p-6 px-10 rounded-2xl my-6 dark:text-white dark:bg-[#323232]'>
                <span className='font-bold text-2xl mb-6'>Undergraduate Students</span>
                <ul className='list-disc pl-4'>
                    {
                        researchAssisstants.undergraduateStudents.map((these, index) => (
                            <li key={index} className='my-1'>{these}</li>
                        ))
                    }
                </ul>
            </div>
        </Layout>
    )
}

export default People