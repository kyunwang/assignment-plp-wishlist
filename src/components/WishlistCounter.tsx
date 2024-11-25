'use client';

import useAppStore from '@/state/useAppStore';
import useStore from '@/state/useStore';
import HeartIcon from './icons/HeartIcon';

const WishlistCounter = () => {
	const wishlistCount = useStore(useAppStore, (state) => state.wishlist.length) ?? 0;

	const shouldShowCount = wishlistCount > 0;

	return (
		<div>
			<HeartIcon />
			<span>
				{shouldShowCount && wishlistCount}
			</span>
		</div>
	);
};

export default WishlistCounter;