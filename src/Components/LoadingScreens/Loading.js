import React from 'react'
import CardSkeleton from './CardSkeleton'

const Loading = () => {
  return (
    <div className='w-11/12 mx-auto mb-8 mt-48'>
      <div className='grid grid-cols-5 gap-6'>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  )
}

export default Loading