import useStore from "@/state/useAppStore";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import HeartIcon from "./icons/HeartIcon";
import Price from "./Price";

interface ProductListItemProps {
	car: any;
}

const ProductListItem = ({ car }: ProductListItemProps) => {
	const { wishlist, toggleWishlistItem } = useStore(state => state);

	const handleHeartClick = useCallback(() => {
		toggleWishlistItem(car.id);
	}, []);

	const isWishlisted = wishlist.includes(car.id);



	return (
		<div key={car.id} className="flex flex-col px-4">
			<div className="flex justify-between">
				<p>{car.title} - {car.year}</p>
				<button onClick={handleHeartClick}>
					<HeartIcon isActive={isWishlisted} />
				</button>
			</div>

			<div>

				<Image src={`/images/${car.image}`} width={600} height={400} alt={car.title} />
			</div>

			<div className="flex justify-between">
				<div>
					<p>KM - {car.kilometers}</p>
					<p>Dealer - {car.dealer}</p>
					<p>Location - {car.location}</p>
				</div>

				<div>
					<p>
						<Price price={car.price} />
					</p>

					<Link href={`/cars/${car.id}`}>
						<button>View Details</button>
					</Link>
				</div>

			</div>
		</div>
	);
};

export default ProductListItem;