import { motion } from 'framer-motion'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Pages from './Pages'

const App: React.FC = () => {

  return (
    <React.Suspense
      fallback={
        <div className='w-full h-screen flex justify-center items-center'>
          <div className='flex flex-col items-center justify-center'>
            <span className='font-bold text-2xl mt-4'>Loading...</span>
          </div>
        </div>
      }
    >
      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} className="">
        <ToastContainer
          theme='colored'
          position='top-right'
          hideProgressBar={true}
        />
        <Pages />
      </motion.div>
    </React.Suspense>
  )
}

export default App