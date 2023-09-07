import React, { useContext, useEffect, useState } from 'react'
import { DestinationContext } from '../../Contexts/DestinationProvider'
import FilterModal from './FilterModal';
import NavbarTop from './NavbarTop';

const Navbar = () => {
  const { filters, setFilters, filtersCount } = useContext(DestinationContext);

  const [minimize, setMinimize] = useState(false);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setMinimize(true);
      }
      else {
        setMinimize(false);
      }
    })

  }, [])
  return (
    <nav className='fixed bg-[#ffffff] top-0 left-0 w-full z-10'>
      {/* Top part */}
      <NavbarTop />

      {/* Bottom part */}
      <div className={`${minimize ? "h-20 shadow-sm" : "h-28"} flex justify-center items-center gap-8 transition-all duration-50`}>
        <button onClick={() => setFilters((prevFilters) => ({ ...prevFilters, subCategory: "island" }))} className={`py-2 text-sm text-gc flex flex-col items-center ${filters.subCategory === "island" ? 'border-b-2 border-black opacity-100' : "opacity-70"}`}>
          <img className='w-6' src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" alt="" />
          <p>Islands</p>
        </button>
        <button onClick={() => setFilters((prevFilters) => ({ ...prevFilters, subCategory: "cave" }))} className={`py-2 text-sm text-gc flex flex-col items-center ${filters.subCategory === "cave" ? 'border-b-2 border-black opacity-100' : "opacity-70"}`}>
          <img className='w-6' src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" alt="" />
          <p>Caves</p>
        </button>
        <button onClick={() => setFilters((prevFilters) => ({ ...prevFilters, subCategory: "tropical" }))} className={`py-2 text-sm text-gc flex flex-col items-center ${filters.subCategory === "tropical" ? 'border-b-2 border-black opacity-100' : "opacity-70"}`}>
          <img className='w-6' src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg" alt="" />
          <p>Tropical</p>
        </button>
        <button onClick={() => setFilters((prevFilters) => ({ ...prevFilters, subCategory: "camping" }))} className={`py-2 text-sm text-gc flex flex-col items-center ${filters.subCategory === "camping" ? 'border-b-2 border-black opacity-100' : "opacity-70"}`}>
          <img className='w-6' src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" alt="" />
          <p>Camping</p>
        </button>
        <button onClick={() => setFilters((prevFilters) => ({ ...prevFilters, subCategory: "lakefront" }))} className={`py-2 text-sm text-gc flex flex-col items-center ${filters.subCategory === "lakefront" ? 'border-b-2 border-black opacity-100' : "opacity-70"}`}>
          <img className='w-6' src="	https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" alt="" />
          <p>Lakefront</p>
        </button>
        <button onClick={() => setFilters((prevFilters) => ({ ...prevFilters, subCategory: "beachfront" }))} className={`py-2 text-sm text-gc flex flex-col items-center ${filters.subCategory === "beachfront" ? 'border-b-2 border-black opacity-100' : "opacity-70"}`}>
          <img className='w-6' src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" alt="" />
          <p>Beachfront</p>
        </button>

        {/* filter modal trigger button */}
        <button onClick={() => window.filterModal.showModal()} type="button" className={`${filtersCount && "border-black border-2"} relative rounded-xl px-4 py-3 text-sm text-gc border`}><span className="flex justify-center items-center gap-2"><svg className=' h-4 w-4 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false"><path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg><span className="t7zgiao dir dir-ltr">Filters</span></span>
          {filtersCount ? <p className='absolute -top-2 -right-2 w-5 h-5 text-xs rounded-full bg-black text-white border border-white'>{filtersCount}</p>
          : ""}
        </button>
      </div>


      <FilterModal />
    </nav>
  )
}

export default Navbar