import { useQuery } from '@tanstack/react-query';
import React, { createContext, useEffect, useState } from 'react'

export const DestinationContext = createContext();

const DestinationProvider = ({ children }) => {
    const [refetchD, setRefetchD] = useState(false);
    const [placeCount, setPlaceCount] = useState(0);
    const [filtersCount, setFiltersCount] = useState(0);
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
        maxPrice: "",
        availabilityStart: "",
    });

    const { subCategory, type, propertyType, bedRoom, bed, bathRoom, maxPrice, location, capacity, availabilityStart } = filters;
    const { data } = useQuery({
        queryKey: [subCategory, type, propertyType, bedRoom, bed, bathRoom, maxPrice, location, capacity, availabilityStart],
        queryFn: async () => {
            const res = await fetch(`https://air-bnp.vercel.app/destination/find?subCategory=${subCategory}&type=${type}&propertyType=${propertyType}&location=${location}&bedRoom=${bedRoom}&bathRoom=${bathRoom}&bed=${bed}&maxPrice=${maxPrice}&capacity=${capacity}&availabilityStart=${availabilityStart}`);
            const data = await res.json();
            setPlaceCount(data.count)
            return data;
        }
    })

    useEffect(() => {
        const keys = ["type", "propertyType", "bedRoom", "bed", "bathRoom", "maxPrice"];
        let sum = 0;
        for (const filter in filters) {
            for (const key of keys) {
                if (filter === key) {
                    if (filters[filter]) {
                        sum++;
                    }
                }
            }
        }
        setFiltersCount(sum);
    }, [refetchD]);
    
    // values
    const d = {
        filters,
        setFilters,
        setPlaceCount,
        placeCount,
        refetchD,
        setRefetchD,
        filtersCount
    }
    return (
        <DestinationContext.Provider value={d}>
            {children}
        </DestinationContext.Provider>
    )
}

export default DestinationProvider