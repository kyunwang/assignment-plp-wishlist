import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface WishlistSlice {
	wishlist: string[];
	addWishlistItem: (id: string) => void;
	removeWishlistItem: (id: string) => void;
	toggleWishlistItem: (id: string) => void;
}

const createWishlistSlice: StateCreator<
	WishlistSlice,
	[],
	[],
	WishlistSlice
> = (set, get) => ({
	wishlist: [],
	addWishlistItem: (id: string) => {
		set((state) => ({
			wishlist: [...state.wishlist, id],
		}));
	},
	removeWishlistItem: (id: string) =>
		set((state) => ({
			wishlist: state.wishlist.filter((item) => item !== id),
		})),
	toggleWishlistItem: (id: string) => {
		const { wishlist } = get();
		const isWishlisted = wishlist.includes(id);
		const newWishlist = isWishlisted
			? wishlist.filter((item) => item !== id)
			: [...wishlist, id];

		set(() => ({
			wishlist: newWishlist,
		}));
	},
});

const useAppStore = create<WishlistSlice>()(
	persist(
		(...a) => ({
			...createWishlistSlice(...a),
		}),
		{
			name: 'wishlist-storage',
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({ wishlist: state.wishlist }),
		}
	)
);

export default useAppStore;
