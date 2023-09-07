import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { DestinationContext } from '../../Contexts/DestinationProvider';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const NavbarTop = () => {
    const { filters, refetchD, setRefetchD, setFilters } = useContext(DestinationContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isGuestOpen, setIsGuestOpen] = useState(false);
    const [isDateOpen, setIsDateOpen] = useState(false);

    const [location, setLocation] = useState("");

    const [adults, setAdults] = useState(0);
    const [childrens, setChildrens] = useState(0);
    const [infants, setInfants] = useState(0);
    const [capacity, setCapacity] = useState(0);

    let [selected, setSelected] = useState({
        from: null,
        to: null
    });

    const d1 = selected?.from ? format(selected?.from, 'MMM d') : ``;
    const d2 = selected?.to ? format(selected?.to, 'MMM d') : ``;


    useEffect(() => {
        let total = parseInt(childrens + infants + adults)
        setCapacity(total);
    }, [childrens, adults, infants])

    const handleIsSearchOpen = bool => {
        setIsSearchOpen(bool)
        setIsDateOpen(false);
        setIsGuestOpen(false)
    }

    const handleIsGuestOpen = (bool) => {
        setIsGuestOpen(bool);
        setIsDateOpen(false);
        setIsSearchOpen(false);
    }

    const handleIsDateOpen = bool => {
        setIsDateOpen(bool);
        setIsGuestOpen(false)
        setIsSearchOpen(false);
    }

    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
                setIsGuestOpen(false);
                setIsDateOpen(false)
                setIsSearchOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleFilterSearch = () => {
        filters.location = location;
        filters.capacity = capacity;
        filters.availabilityStart = d1;
        setRefetchD(!refetchD);
        setIsOpen(!isOpen);
        setIsGuestOpen(false)
    }

    const handleRefresh = () => {
        setFilters({
            location: "",
            subCategory: "",
            type: "",
            propertyType: "",
            capacity: "",
            bedRoom: "",
            bed: "",
            bathRoom: "",
            minPrice: "",
            maxPrice: "",
            availabilityStart: "",
        })
        window.location.reload();
    }

    return (
        <>
            <div ref={menuRef} className={`${isOpen ? "h-40 absolute top-0 left-0 w-full bg-white shadow" : "h-20"} flex justify-center items-center border-b z-10 transition-all duration-200`}>
                {/* while isOpen is false */}
                <div onClick={() => setIsOpen(!isOpen)} className={`w-[28%] grid-cols-3 px-4 py-2 rounded-3xl border shadow-md hover:shadow-lg font-semibold items-center gap-1 cursor-pointer  ${isOpen ? "hidden" : "grid"}`}>
                    <p className='text-sm text-center'>{location ? location : "Anywhere"}</p>
                    <p className='text-sm border-s border-e text-center'>{(d1 || d2) ? `${d1} - ${d2}` : "Anyweek"}</p>
                    <p className='whitespace-nowrap text-sm flex justify-center items-center gap-2 text-center'>{capacity ? capacity : "Add"} guest<span className='bg-primary flex justify-center items-center rounded-full w-8 h-8'><svg className='h-5 w-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg></span></p>
                </div>

                {/* isOpen true */}
                <div className={`${isOpen ? "" : "hidden"} pb-4 `}>
                    <div className='h-20 w-full flex justify-center items-center gap-6'>
                        <Link className='font-semibold border-b-2 border-black py-2'>Stays</Link>
                        <Link className=' py-2'>Experiences</Link>
                        <Link className=' py-2'>Online Experiences</Link>
                    </div>
                    <div className='h-20 py-2'>
                        <div className='h-full min-w-[620px] rounded-full bg-base-200 flex justify-center items-center shadow-md relative'>
                            <div className='grid justify-center items-center h-full ' style={{ gridTemplateColumns: "4fr 2fr 3fr" }}>
                                <button onClick={handleIsSearchOpen} className={`h-full flex justify-center flex-col rounded-full ps-6 ${isSearchOpen && "bg-white shadow-2xl"}`}>
                                    <p className='text-sm font-semibold'>Search</p>
                                    <input onChange={(e) => setLocation(e.target.value)} className='bg-transparent outline-none' placeholder='Search destinations' type="search" />
                                </button>
                                <button onClick={handleIsDateOpen} className={`h-full flex justify-center flex-col rounded-full ps-4 ${isDateOpen && "bg-white shadow-2xl"}`}>
                                    <div className=''>
                                        <p className='text-start text-sm font-semibold'>Check in</p>
                                        <p className='text-start overflow-hidden'>{selected?.from || selected?.to ? `${d1} - ${d2}` : "Anytime"}</p>
                                        <div className={`${isDateOpen ? "absolute  bg-white top-[100%] right-0 rounded-3xl mt-3" : "hidden"} flex flex-col gap-2 w-full shadow py-10`}>
                                            <DayPicker
                                                mode="range"
                                                selected={selected}
                                                onSelect={setSelected}
                                                numberOfMonths={2}
                                                className='flex justify-center items-center'
                                            />
                                        </div>
                                    </div>
                                </button>
                                <button className={`h-full flex justify-center items-center gap-4  rounded-full ps-4 ${isGuestOpen && "bg-white shadow-2xl"}`}>
                                    <div onClick={handleIsGuestOpen} className=''>
                                        <p className='text-start text-sm font-semibold'>Who</p>
                                        <p className='text-start overflow-hidden'>{capacity ? `${capacity} - guests` : "Add guests"}</p>
                                        <div className={`${isGuestOpen ? "absolute w-[420px] bg-white top-[100%] right-0 rounded-3xl mt-3" : "hidden"} flex flex-col gap-2`}>
                                            <ul className='flex flex-col gap-2 w-10/12 mx-auto'>
                                                <li className='border-b py-6 flex justify-between items-center'>
                                                    <div className='text-start'>
                                                        <h2 className='font-semibold'>Adults</h2>
                                                        <p className=''>Ages 13 or above</p>
                                                    </div>
                                                    <div className='grid grid-cols-3 items-center gap-1'>
                                                        <button onClick={() => adults !== 0 && setAdults(adults - 1)} className='h-10 w-10 font-semibold text-2xl border rounded-full'>-</button>
                                                        <h1 className='text-lg'>{adults}</h1>
                                                        <button onClick={() => setAdults(adults + 1)} className='h-10 w-10 font-semibold text-2xl border rounded-full'>+</button>
                                                    </div>
                                                </li>
                                                <li className='border-b py-6 flex justify-between items-center'>
                                                    <div className='text-start'>
                                                        <h2 className='font-semibold'>Childrens</h2>
                                                        <p className=''>Ages 2 to 12</p>
                                                    </div>
                                                    <div className='grid grid-cols-3 items-center gap-1'>
                                                        <button onClick={() => childrens !== 0 && setChildrens(childrens - 1)} className='h-10 w-10 font-semibold text-2xl border rounded-full'>-</button>
                                                        <h1 className='text-lg'>{childrens}</h1>
                                                        <button onClick={() => setChildrens(childrens + 1)} className='h-10 w-10 font-semibold text-2xl border rounded-full'>+</button>
                                                    </div>
                                                </li>
                                                <li className='border-b py-6 flex justify-between items-center'>
                                                    <div className='text-start'>
                                                        <h2 className='font-semibold'>Infants</h2>
                                                        <p className=''>Under 2</p>
                                                    </div>
                                                    <div className='grid grid-cols-3 items-center gap-1'>
                                                        <button onClick={() => infants !== 0 && setInfants(infants - 1)} className='h-10 w-10 font-semibold text-2xl border rounded-full'>-</button>
                                                        <h1 className='text-lg'>{infants}</h1>
                                                        <button onClick={() => setInfants(infants + 1)} className='h-10 w-10 font-semibold text-2xl border rounded-full'>+</button>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className='pe-2'>
                                        <div onClick={handleFilterSearch} className='bg-primary rounded-full '><p className='flex justify-center items-center text-white px-3 py-2  text-center font-semibold'><span className=' flex justify-center items-center rounded-full w-8 h-8'><svg className='h-6 w-6 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg></span> Search</p></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? "fixed top-0 left-0 min-h-screen min-w-full bg-[#00000040]" : "hidden"} `}>

            </div>
            <button onClick={handleRefresh} className='absolute top-6 left-14 z-20 text-primary text-2xl font-semibold'>airbnp</button>
            <button className='absolute top-7 right-14 z-20 '>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" 
                className={`block h-5 w-5 fill-current`} ><path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path></svg>
            </button>
        </>
    )
}

export default NavbarTop
