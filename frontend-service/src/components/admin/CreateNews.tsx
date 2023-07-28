import React, { FormEvent, useContext } from 'react'
import { toast } from 'react-toastify'
import { useCreateNews } from '../../hooks'
import { CommonContext } from '../../context'
import { BiLoaderAlt } from 'react-icons/bi'

const CreateNews: React.FC = () => {

    const [newsData, setNewsData] = React.useState({
        title: '',
        text: ''
    })
    const [loading, setLoading] = React.useState<boolean>(false)

    const { addNews } = useContext(CommonContext)
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            if (newsData.title.length < 1 || newsData.text.length < 1) return toast.error('Please fill all the fields')
            await useCreateNews({ data: newsData, addNews, setLoading })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-full flex flex-col mt-8 items-center'>
            <form className='w-11/12 lg:w-10/12 flex flex-col items-center' onSubmit={handleSubmit}>
                <span className='font-bold text-2xl mb-8'>Create a New Article</span>
                <div className='w-full'>
                    <label className="text-sm font-medium leading-none text-gray-800">
                        Title
                    </label>
                    <input
                        aria-label="enter title"
                        role="input"
                        type="text"
                        className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 my-3"
                        placeholder="Title"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setNewsData({ ...newsData, title: e.target.value });
                        }}
                        value={newsData.title}
                    />
                </div>
                <div className='w-full'>
                    <label className="text-sm font-medium leading-none text-gray-800">
                        Title
                    </label>
                    <textarea
                        rows={5}
                        className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 my-3"
                        placeholder={`Description: \n\n  Tip 1: Use <color>text</text> to add color to your text \n  Tip 2: Use [link](https://www.google.com) to add a link
                        `}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setNewsData({ ...newsData, text: e.target.value });
                        }}
                        value={newsData.text}
                    />
                </div>
                <div className="mt-8 w-full">
                    <button
                        role="button"
                        aria-label="login "
                        className="focus:ring-2 flex items-center justify-center focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none  text-white focus:outline-none bg-green-500 border rounded hover:bg-green-600 duration-1000 hover:animate-ring py-4 w-full disabled:bg-slate-600"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? <BiLoaderAlt className="animate-spin" size={25} /> : "SAVE"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateNews