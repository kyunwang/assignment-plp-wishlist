import useStore from "@/state/useAppStore";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import HeartIcon from "./icons/HeartIcon";

interface ProductListItemProps {
	car: any;
}

const ProductListItem = ({ car }: ProductListItemProps) => {
	const { id, title, year, kilometers, location, dealer, price, image } = car;
	const { wishlist, toggleWishlistItem } = useStore(state => state);

	const handleHeartClick = useCallback(() => {
		toggleWishlistItem(id);
	}, []);

	const isWishlisted = wishlist.includes(car.id);

	return (
		<div key={car.id}>
			<div>
				<p>{car.title} - {car.year}</p>
				<button onClick={handleHeartClick}>
					<HeartIcon isActive={isWishlisted} />
				</button>
			</div>

			<div>{car.kilometers}</div>
			<div>{car.location}</div>
			<div>{car.dealer}</div>


			<div>{car.price}</div>
			<Link href={`/cars/${car.id}`}>
				<button>View Details</button>
			</Link>

			{/* <Image src={`/images/${car.image}`} width={600} height={400} alt={car.title} /> */}
			<Image src={`/images/image1.png`} width={600} height={400} alt={car.title} />
		</div>
	);
};

export default ProductListItem;