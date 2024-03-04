import React from 'react'

export default function loading() {
  return (
    <div className=''>
        {/* <div className=' w-96'></div> */}
        <div className="animate-pulse flex flex-col  items-center mt-7">
            <div className="  h-96 w-72 sm:w-96 mb-4 bg-gray-400 rounded-md "></div>
            <div className=" h-6 w-48 sm:w-48 mb-4 bg-gray-400 rounded-md "></div>

        </div>

    </div>
  )
}
