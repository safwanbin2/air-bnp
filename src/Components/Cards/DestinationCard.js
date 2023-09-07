import React from 'react'
import { Link } from 'react-router-dom';
import CardSlider from './CardSlider';

const DestinationCard = ({ destination }) => {
    const { title, price, image, area, star, availabilityStart, availabilityEnd } = destination;
    return (
        <Link className='relative'>
            <CardSlider
                img1={image}
                img2={image}
                img3={image}
            />
            {/* <img className='h-[200px] w-full rounded-xl' src={image} alt="" /> */}
            <div className='py-4'>
                <div className='flex justify-between items-center'>
                    <h3 className='font-semibold '>{title}</h3>
                    <div className='flex justify-center items-center gap-1'>
                        <svg className='w-[10px] h-[10px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" ><path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path></svg>
                        <p className='font-semibold'>{star}</p>
                    </div>
                </div>
                <h4 className='text-sm'>{area} acres area</h4>
                <h4 className='text-sm'>{availabilityStart} - {availabilityEnd}</h4>
                <p className='mt-1'><span className='font-semibold'>$ {price}</span> night</p>
            </div>
            <div className='absolute top-2 right-2 z-[1]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" className='block h-6 w-6 overflow-visible' style={{fill: "rgba(0, 0, 0, 0.5)", stroke: "#ffffff", strokeWidth: "2"}}><path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path></svg>
            </div>
        </Link>
    )
}

export default DestinationCard