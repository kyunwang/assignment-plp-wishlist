'use client';
import ProductListItem from '@/components/ProductListItem';
import useSWR from 'swr';
import { Car } from './types';

const fetcher = (endpoint: string) => fetch(endpoint).then(res => res.json());

const Home = () => {
  const { data, error, isLoading } = useSWR<Car[]>(`/api`, fetcher);

  if (isLoading) return ("is loading");
  if (error) return ("error");
  if (!data) return ("no data");

  return (
    <div>
      <h1 className='my-4 text-2xl font-bold italic'>{data.length} Cars Listed</h1>
      {
        data.map(((car) => (
          <div key={car.id} className='mb-6'>
            <ProductListItem car={car} />
          </div>
        )
        ))
      }
    </div>
  );
};


export default Home;