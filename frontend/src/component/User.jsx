import React from 'react'

const User = ({heading}) => {
  return (
    <div className='h-[100vh] w-full flex justify-center items-center flex-col'>
        <h2 className='text-3xl font-bold pb-10 underline'>{heading}</h2>
            <div>
            <table className='border-2 border-blue-500'>
            <thead className='border-2 border-blue-500'>
              <tr>
                <th className='border-2 border-blue-500 pt-2 pb-2 pl-8 pr-8'>User</th>
                <th className='border-2 border-blue-500 pt-2 pb-2 pl-8 pr-8'>Rating</th>
                <th className='border-2 border-blue-500 pt-2 pb-2 pl-8 pr-8'>Shop</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border-2 border-blue-500 pt-2 pb-2 pl-8 pr-8'>Satyendra</td>
                <td className='border-2 border-blue-500 text-center pt-2 pb-2 pl-8 pr-8'>5</td>
                <td className='border-2 border-blue-500 pt-2 pb-2 pl-8 pr-8'>Haldiram</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
            </div>
        </div>
  )
}

export default User