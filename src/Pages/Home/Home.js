import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import Loading from '../../Components/LoadingScreens/Loading';
import DestinationCard from '../../Components/Cards/DestinationCard';
import { DestinationContext } from '../../Contexts/DestinationProvider';
import NoDataFound from '../../Components/NoDataFound/NoDataFound';

const Home = () => {

    const { filters, setPlaceCount, refetchD } = useContext(DestinationContext);
    const { subCategory, type, propertyType, location, maxPrice, bedRoom, bathRoom, bed, capacity, availabilityStart } = filters;

    const { data, isLoading } = useQuery({
        queryKey: ["destination/find", subCategory, refetchD],
        queryFn: async () => {
            const res = await fetch(`https://air-bnp.vercel.app/destination/find?subCategory=${subCategory}&type=${type}&propertyType=${propertyType}&location=${location}&bedRoom=${bedRoom}&bathRoom=${bathRoom}&bed=${bed}&maxPrice=${maxPrice}&capacity=${capacity}&availabilityStart=${availabilityStart}`);
            const data = await res.json();
            setPlaceCount(data.count)
            return data;
        }
        // queryFn: async () => {
        //     const res = await fetch(`https://air-bnp.vercel.app/destination/find?subCategory=${subCategory}&type=${type}&propertyType=${propertyType}&location=${location}&bedRoom=${bedRoom}&bathRoom=${bathRoom}&bed=${bed}&maxPrice=${maxPrice}&capacity=${capacity}`);
        //     const data = await res.json();
        //     setPlaceCount(data.count)
        //     return data;
        // }
    })

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className='w-11/12 mx-auto mb-8 mt-48'>
            {
                data.destinations.length > 0 ?
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>
                        {
                            data.destinations.map(destination => <DestinationCard
                                key={destination._id}
                                destination={destination}
                            />)
                        }
                    </div>
                    : <NoDataFound />
            }
        </section>
    )
}

export default Home