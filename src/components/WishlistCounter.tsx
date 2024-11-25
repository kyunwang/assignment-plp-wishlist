'use client';

import useAppStore from '@/state/useAppStore';
import useStore from '@/state/useStore';
import HeartIcon from './icons/HeartIcon';

const WishlistCounter = () => {
	const wishlistCount = useStore(useAppStore, (state) => state.wishlist.length) ?? 0;

	const shouldShowCount = wishlistCount > 0;

	return (
		<div className='relative'>
			<HeartIcon />
			<span className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-xs'>
				{shouldShowCount && wishlistCount}
			</span>
		</div>
	);
};

export default WishlistCounter;