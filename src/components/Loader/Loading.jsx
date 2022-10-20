import React from 'react'
import { InfinitySpin } from 'react-loader-spinner';

function Loading() {
  return (
    <div className='loader'>
             
          <InfinitySpin 
           width='500'
           color="#fa4169"
          />
    </div>
  )
}

export default Loading;