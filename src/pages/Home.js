import React from 'react'
import '../style/Home.css'
import Cards from '../components/Cards'
const Home = () => {
  return (
    <div className='grid justify-items-center'>
        
        <div className='justify-center height-full'>
        <div className='pb-10 flex justify-center logo'>
        <img src='./logo.png'/>
        </div>
        <Cards/>
        </div>

        {/* SearchBar */}
        <div className='fixed bottom-0  grid justify-items-center'>
        <div className=" border-none bg-slate-100  flex px-5 py-3 rounded-full relative flex ">
            <div>
            <i class="fa-solid fa-paperclip"></i>
            <input
            id="query"
            name="query"
            type="text"
            placeholder="Message ChatGPT"
            className="bg-slate-100 ps-5 border-0 w-96"
            />
            </div>
            <div className='bg-slate-300 rounded-full'>
              <i class="fa-solid fa-arrow-up text-slate-100 p-1"></i>
            </div>
        </div>
        <p className="text-xs text-slate-500 py-1 ">
            ChatGPT can make mistakes. Check important info.
        </p>
        </div>
    </div>
  )
}

export default Home

