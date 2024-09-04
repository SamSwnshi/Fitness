import React from 'react'

const ScrollBar = ({data}) => {
  return (
    <div className='flex gap-2'>
      {data?.map((item,index)=>(
        <div key={index} className='flex'>
           {item} 
        </div>
      ))}
    </div>
  )
}

export default ScrollBar
