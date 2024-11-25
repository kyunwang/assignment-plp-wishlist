// https://zustand.docs.pmnd.rs/integrations/persisting-store-data#usage-in-next.js
// Due to Next.js SSR - Get Zustand to wait a little before updating the components
import { useEffect, useState } from 'react';

const useStore = <T, F>(
	store: (callback: (state: T) => unknown) => unknown,
	callback: (state: T) => F,
) => {
	const result = store(callback) as F;
	const [data, setData] = useState<F>();

	useEffect(() => {
		setData(result);
	}, [result]);

	return data;
};

export default useStore;