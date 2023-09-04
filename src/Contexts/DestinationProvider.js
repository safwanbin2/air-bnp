import React, { createContext, useState } from 'react'

export const DestinationContext = createContext();

const DestinationProvider = ({ children }) => {
    const [refetchD, setRefetchD] = useState(false);
    const [filters, setFilters] = useState({
        location: "",
        subCategory: "",
        type: "",
        propertyType: "",
        capacity: "",
        bedRoom: "",
        bed: "",
        bathRoom: "",
        minPrice: "",
        maxPrice: 1000,
    });

    const [placeCount, setPlaceCount] = useState(0);

    // values
    const d = {
        filters,
        setFilters,
        setPlaceCount,
        placeCount,
        refetchD,
        setRefetchD
    }
    return (
        <DestinationContext.Provider value={d}>
            {children}
        </DestinationContext.Provider>
    )
}

export default DestinationProvider