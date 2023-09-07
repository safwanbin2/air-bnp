import React, { useContext } from 'react'
import { DestinationContext } from '../../Contexts/DestinationProvider';

const FilterModal = () => {

    const { filters, setFilters, placeCount, refetchD, setRefetchD } = useContext(DestinationContext);
    const { maxPrice, bedRoom, bed, bathRoom, propertyType, type } = filters;

    const clearFilter = () => {
        setFilters({
            location: "",
            subCategory: filters.subCategory,
            type: "",
            propertyType: "",
            capacity: "",
            bedRoom: "",
            bed: "",
            bathRoom: "",
            minPrice: "",
            maxPrice: "",
        });
        setRefetchD(!refetchD)
    }

    return (
        <dialog id="filterModal" className="modal w-full">
            <form method="dialog" className="modal-box min-w-[55%] h-[90%] relative">
                <div className='border-b pb-6'>
                    <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2 ms-2">✕</button>
                    <h3 className="font-semibold absolute top-2 p-1 left-[45%]">Filters</h3>
                </div>
                <div className='h-[80%] overflow-y-scroll'>
                    <div className='py-6 border-b'>
                        <h2 className='text-2xl font-bold mb-2'>Type of Place</h2>
                        <p className='text-sm'>{type === "" && "Search rooms, entire homes and more. Nightly prices don't include fees or taxes."} {type === "room" && "A room in a home, plus access to shared spaces. Nightly prices don't include fees or taxes."} {type === "home" && "A home all to yourself. Nightly prices don't include fees or taxes."}</p>
                        <div className='mt-6 mx-auto btn-group btn-group-vertical lg:btn-group-horizontal justify-center items-center w-11/12 grid grid-cols-3 border rounded-xl'>
                            <div onClick={() => setFilters((preFilters) => ({ ...preFilters, type: "" }))} className={`rounded-s-xl cursor-pointer font-semibold text-base flex flex-col justify-center items-center px-6 py-4 border-e ${type === "" ? "bg-[#242424] text-white shadow-inner" : "bg-white text-black"}`}>
                                <p>Any Type</p>
                                <p className='text-sm font-normal'>$175 avg.</p>
                            </div>
                            <div onClick={() => setFilters((preFilters) => ({ ...preFilters, type: "room" }))} className={`cursor-pointer font-semibold text-base flex flex-col justify-center items-center px-6 py-4 ${type === "room" ? "bg-[#242424] text-white shadow-inner" : "bg-white text-black"}`}>
                                <p>Room</p>
                                <p className='text-sm font-normal'>$105 avg.</p>
                            </div>
                            <div onClick={() => setFilters((preFilters) => ({ ...preFilters, type: "home" }))} className={`rounded-e-xl cursor-pointer font-semibold text-base flex flex-col justify-center items-center px-6 py-4 border-s ${type === "home" ? "bg-[#242424] text-white shadow-inner" : "bg-white text-black"}`}>
                                <p>Entire Home</p>
                                <p className='text-sm font-normal'>$250 avg.</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-6 border-b'>
                        <h2 className='text-2xl font-semibold mb-2'>Price Range</h2>
                        <div className='w-11/12 mx-auto'>
                            <input onChange={(e) => setFilters((prevFilters) => ({ ...prevFilters, maxPrice: parseInt(e.target.value) }))} type="range" min={0} defaultValue={""} max="1000" className="mt-6 range range-xs" />
                        </div>
                        <div className='grid items-center w-11/12 mx-auto mt-6' style={{ gridTemplateColumns: "3fr 1fr 3fr" }}>
                            <div className='py-2 ps-3 rounded-xl border border-black'>
                                <h4 className='text-sm'>Minimum</h4>
                                <p>$ 00</p>
                            </div>
                            <div className='h-[1px] w-4/12 mx-auto bg-black'></div>
                            <div className='py-2 ps-3 rounded-xl border border-black'>
                                <h4 className='text-sm'>Maximum</h4>
                                <p>$ {maxPrice ? maxPrice : "1000+"}</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-6 border-b'>
                        <h2 className='text-2xl font-semibold mb-2'>Rooms and Beds</h2>
                        <div className='my-6'>
                            <h3 className='mb-6'>Bedrooms</h3>
                            <div className='flex justify-start items-center gap-4'>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bedRoom: "" }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bedRoom === "" ? "bg-black text-white" : ""}`}>Any</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bedRoom: 1 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bedRoom === 1 ? "bg-black text-white" : ""}`}>1</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bedRoom: 2 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bedRoom === 2 ? "bg-black text-white" : ""}`}>2</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bedRoom: 3 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bedRoom === 3 ? "bg-black text-white" : ""}`}>3</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bedRoom: 4 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bedRoom === 4 ? "bg-black text-white" : ""}`}>4</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bedRoom: 5 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bedRoom === 5 ? "bg-black text-white" : ""}`}>5</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bedRoom: 6 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bedRoom === 6 ? "bg-black text-white" : ""}`}>6</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bedRoom: 7 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bedRoom === 7 ? "bg-black text-white" : ""}`}>7</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bedRoom: 8 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bedRoom === 8 ? "bg-black text-white" : ""}`}>8+</div>
                            </div>
                        </div>
                        <div className='my-6'>
                            <h3 className='mb-6'>Bed</h3>
                            <div className='flex justify-start items-center gap-4'>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bed: "" }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bed === "" ? "bg-black text-white" : ""}`}>Any</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bed: 1 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bed === 1 ? "bg-black text-white" : ""}`}>1</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bed: 2 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bed === 2 ? "bg-black text-white" : ""}`}>2</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bed: 3 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bed === 3 ? "bg-black text-white" : ""}`}>3</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bed: 4 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bed === 4 ? "bg-black text-white" : ""}`}>4</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bed: 5 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bed === 5 ? "bg-black text-white" : ""}`}>5</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bed: 6 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bed === 6 ? "bg-black text-white" : ""}`}>6</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bed: 7 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bed === 7 ? "bg-black text-white" : ""}`}>7</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bed: 8 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bed === 8 ? "bg-black text-white" : ""}`}>8+</div>
                            </div>
                        </div>
                        <div className='my-6'>
                            <h3 className='mb-6'>Bathroom</h3>
                            <div className='flex justify-start items-center gap-4'>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bathRoom: "" }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bathRoom === "" ? "bg-black text-white" : ""}`}>Any</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bathRoom: 1 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bathRoom === 1 ? "bg-black text-white" : ""}`}>1</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bathRoom: 2 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bathRoom === 2 ? "bg-black text-white" : ""}`}>2</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bathRoom: 3 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bathRoom === 3 ? "bg-black text-white" : ""}`}>3</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bathRoom: 4 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bathRoom === 4 ? "bg-black text-white" : ""}`}>4</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bathRoom: 5 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bathRoom === 5 ? "bg-black text-white" : ""}`}>5</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bathRoom: 6 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bathRoom === 6 ? "bg-black text-white" : ""}`}>6</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bathRoom: 7 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bathRoom === 7 ? "bg-black text-white" : ""}`}>7</div>
                                <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, bathRoom: 8 }))} className={`cursor-pointer border rounded-3xl py-1 px-5 ${bathRoom === 8 ? "bg-black text-white" : ""}`}>8+</div>
                            </div>
                        </div>
                    </div>
                    <div className='py-6 border-b'>
                        <h2 className='text-2xl font-bold mb-2'>Property Type</h2>
                        <div className='grid grid-cols-4 gap-4 my-6'>
                            <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, propertyType: "house" }))} className={`border p-4 rounded-xl flex flex-col gap-8 cursor-pointer hover:border-black ${propertyType === "house" && "border-black"}`}>
                                <img className='w-8 h-8' src="https://a0.muscache.com/pictures/4d7580e1-4ab2-4d26-a3d6-97f9555ba8f9.jpg" alt="" />
                                <p className='font-semibold text-lg'>House</p>
                            </div>
                            <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, propertyType: "apartment" }))} className={`border p-4 rounded-xl flex flex-col gap-8 cursor-pointer hover:border-black ${propertyType === "apartment" && "border-black"}`}>
                                <img className='w-8 h-8' src="https://a0.muscache.com/pictures/21cfc7c9-5457-494d-9779-7b0c21d81a25.jpg" alt="" />
                                <p className='font-semibold text-lg'>Apartment</p>
                            </div>
                            <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, propertyType: "guesthouse" }))} className={`border p-4 rounded-xl flex flex-col gap-8 cursor-pointer hover:border-black ${propertyType === "guesthouse" && "border-black"}`}>
                                <img className='w-8 h-8' src="https://a0.muscache.com/pictures/6f261426-2e47-4c91-8b1a-7a847da2b21b.jpg" alt="" />
                                <p className='font-semibold text-lg'>Guesthouse</p>
                            </div>
                            <div onClick={() => setFilters((prevFilters) => ({ ...prevFilters, propertyType: "hostel" }))} className={`border p-4 rounded-xl flex flex-col gap-8 cursor-pointer hover:border-black ${propertyType === "hostel" && "border-black"}`}>
                                <img className='w-8 h-8' src="https://a0.muscache.com/pictures/64b27fed-56a1-4f03-950a-d8da08efb428.jpg" alt="" />
                                <p className='font-semibold text-lg'>Hostel</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-between items-center mt-6'>
                    <div onClick={clearFilter} className='font-semibold text-lg underline cursor-pointer'>Clear All</div>
                    <button onClick={() => setRefetchD(!refetchD)} className='btn bg-[#242424] hover:bg-black text-white'>Show {placeCount} places</button>
                </div>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export default FilterModal
