import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { CommonContext } from '../../context';
import { useCreatePublication } from '../../hooks';
import { IPublication } from '../../types';
import { toast } from 'react-toastify';

const CreatePublication: React.FC = () => {

  const [publicationData, setPublicationData] = React.useState<IPublication>({
    articles: [],
    title: ''
  })
  const [addArticleMode, setAddArticleMode] = React.useState<boolean>(false)
  const [publicationArticleData, setPublicationArticleData] = React.useState<{
    name: string,
    collaborators: string,
    time: string,
    description: string,
  }>({
    name: '',
    collaborators: '',
    time: '',
    description: '',
  })
  const [loading, setLoading] = React.useState<boolean>(false)

  const { addPublication } = React.useContext(CommonContext)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      await useCreatePublication({ data: publicationData, addPublication, setLoading, setPublicationData })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='w-full flex flex-col mt-8 items-center'>
      <form className='w-11/12 lg:w-10/12 flex flex-col items-center' onSubmit={handleSubmit}>
        <span className='font-bold text-2xl mb-8 dark:text-white'>Create a New Publications</span>
        <div className='w-full'>
          <label className="text-sm font-medium leading-none text-gray-800 dark:text-white">
            Title
          </label>
          <input
            aria-label="enter title"
            role="input"
            type="text"
            className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 my-3"
            placeholder="Title"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPublicationData({ ...publicationData, title: e.target.value });
            }}
            value={publicationData.title}
          />
        </div>
        <div className='w-full justify-between items-center flex'>
          <span className=' dark:text-white'>Articles</span>
          <button type='button' className='bg-green-500 hover:bg-green-600 px-6 py-2 text-white' onClick={() => setAddArticleMode(!addArticleMode)}>{addArticleMode ? "Cancel" : "New Article"}</button>
        </div>
        {
          publicationData.articles.length > 0 && (
            <div className='w-full'>
              <div className='flex flex-col'>
                {
                  publicationData.articles.map((article, index) => (
                    <div key={index} className='flex flex-col'>
                      <span className='text-sm font-semibold  dark:text-white my-2'>{article.name}</span>
                      <span className='text-sm font-semibold  dark:text-white my-2'>{article.collaborators}</span>
                      <span className='text-sm font-semibold  dark:text-white my-2'>{article.time}</span>
                      <span className='text-sm font-semibold  dark:text-white my-2'>{article.description}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          )
        }
        {
          addArticleMode && (
            <div className='w-full'>
              <label className="text-sm font-medium leading-none text-gray-800  dark:text-white">
                Publication Article
              </label>
              <div className='flex flex-col'>
                <input
                  aria-label="enter name"
                  role="input"
                  type="text"
                  className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 my-3"
                  placeholder="Article Name"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPublicationArticleData({ ...publicationArticleData, name: e.target.value });
                  }}
                  value={publicationArticleData.name}
                />
                <input
                  aria-label="enter collaborators"
                  role="input"
                  type="text"
                  className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 my-3"
                  placeholder="Article Collaborators"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPublicationArticleData({ ...publicationArticleData, collaborators: e.target.value });
                  }}
                  value={publicationArticleData.collaborators}
                />
                <input
                  aria-label="enter time"
                  role="input"
                  type="text"
                  className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 my-3"
                  placeholder="Article Time"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPublicationArticleData({ ...publicationArticleData, time: e.target.value });
                  }}
                  value={publicationArticleData.time}
                />
                <textarea
                  aria-label="enter name"
                  rows={5}
                  className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 my-3"
                  placeholder={`Article Description: \n\n  Tip 1: Use <color>text</text> to add color to your text \n  Tip 2: Use [link](https://www.google.com) to add a link
                        `}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    setPublicationArticleData({ ...publicationArticleData, description: e.target.value });
                  }}
                  value={publicationArticleData.description}
                />
                <button type='button' className='px-6 bg-green-500 hover:bg-green-600 text-white py-2 w-fit' onClick={() => {
                  if (publicationArticleData.name.length < 1 || publicationArticleData.collaborators.length < 1 || publicationArticleData.time.length < 1 || publicationArticleData.description.length < 1) return toast.error('Please fill all the fields for the publication article')
                  setPublicationData({
                    ...publicationData,
                    articles: [...publicationData.articles, publicationArticleData]
                  })
                  setAddArticleMode(false)
                  setPublicationArticleData({
                    name: '',
                    collaborators: '',
                    time: '',
                    description: '',
                  })
                }}>Add</button>
              </div>
            </div>
          )
        }

        <div className="mt-8 w-full">
          <button
            role="button"
            aria-label="login "
            className="dark:border-none flex items-center justify-center  focus:ring-indigo-700 text-sm font-semibold leading-none  text-white focus:outline-none bg-green-500 border rounded hover:bg-green-600 duration-1000 ring py-4 w-full disabled:bg-slate-600"
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

export default CreatePublication