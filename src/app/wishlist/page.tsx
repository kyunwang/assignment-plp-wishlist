'use client';

import ProductListItem from "@/components/ProductListItem";
import useAppStore from "@/state/useAppStore";
import useStore from "@/state/useStore";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Wishlist = () => {
	const wishlistIds = useStore(useAppStore, (state) => state.wishlist.join(','));

	const { data, isLoading, error } = useSWR(`/api/cars?ids=${wishlistIds}`, fetcher);

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

export default Wishlist;