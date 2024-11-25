'use client';
import ProductListItem from '@/components/ProductListItem';
import useSWR from 'swr';

const fetcher = (endpoint: string) => fetch(endpoint).then(res => res.json());

const Home = () => {
  const { data, error, isLoading } = useSWR(`/api`, fetcher);

  if (isLoading) return ("is loading");
  if (error) return ("error");
  if (!data) return ("no data");

  return (
    <div>
      <h1>{data.length} Cars Listed</h1>
      {
        data.map(((car) => (
          <ProductListItem key={car.id} car={car} />
        )
        ))
      }
    </div>
  );
};


export default Home;