import React from 'react'
import Sidebar from '../component/Sidebar'
import AdminSidebar from '../Json/AdminSidebar.json'
import Allrating from '../component/Allrating'
import User from '../component/User'
import Store from '../component/Store'
import Owner from '../component/Owner'

const Rating = ({heading}) => {
  return (
    <div className='flex'>
        <Sidebar data={AdminSidebar}/>
        {
            (heading==="Ratings")&&<Allrating heading={heading}/>
        }
        {
            (heading==="All Users")&&<User heading={heading}/>
        }
        {
            (heading==="All Stores")&&<Store heading={heading}/>
        }
        {
            (heading==="All Owners")&&<Owner heading={heading}/>
        }
    </div>
  )
}

export default Rating;