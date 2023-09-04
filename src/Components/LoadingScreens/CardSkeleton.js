import React from 'react'

const CardSkeleton = () => {
    return (
        <div className="flex flex-col m-8 rounded shadow-md w-[230px] h-[300px] animate-pulse ">
            <div className="h-48 rounded-t "></div>
            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8">
                <div className="w-full h-6 rounded bg-base-300"></div>
                <div className="w-full h-6 rounded bg-base-300"></div>
                <div className="w-3/4 h-6 rounded bg-base-300"></div>
            </div>
        </div>
    )
}

export default CardSkeleton
