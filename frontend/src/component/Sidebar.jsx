import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
  return (
    <div className='h-screen w-[20vw] b border-r-4 rounded-md '>
        <div className='w-100 flex align-middle justify-center text-3xl pt-4 underline text-orange-700 font-bold'>
            SHOPER
        </div>
        <div className='flex flex-col justify-center align-middle pl-10 pt-8'>
          {
            props.data.map((ele,i)=>(
              <Link to={ele.route} key={i}>{ele.display_name}</Link>
            ))
          }
        </div>
    </div>
  )
}

export default Sidebar